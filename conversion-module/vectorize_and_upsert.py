#!/usr/bin/env python
import os
from dotenv import load_dotenv
from pinecone import Pinecone, ServerlessSpec
from sentence_transformers import SentenceTransformer
from PyPDF2 import PdfReader
import docx

# Load environment variables
load_dotenv()

# 1. Initialize Pinecone client
pc = Pinecone(
    api_key=os.getenv("PINECONE_API_KEY"),
    # If required for your setup, uncomment:
    environment=os.getenv("PINECONE_ENVIRONMENT")
)

#

# 2. Connect to index
index_name = os.getenv("PINECONE_INDEX_NAME")
index = pc.Index(index_name)

# just in case the index is not listed in the indices present.
if index_name not in pc.list_indexes().names():
    # Optional: notify / raise error / create if you truly need to
    raise RuntimeError(f"Index {index_name} does not exist. Please create it manually.")


# If already exists, delete first:
# if index_name in pc.list_indexes().names():
#    pc.delete_index(index_name)

# Create with 384 dims
# pc.create_index(
#    name=index_name,
#    dimension=384,
#    metric="cosine",
#    spec=ServerlessSpec(cloud="aws", region="us-east-1")
# )

# index = pc.Index(index_name)

# 3. Load embedding model (CPU-compatible)
model = SentenceTransformer("all-MiniLM-L6-v2")

def extract_text(path):
    ext = path.lower().split('.')[-1]
    if ext == 'pdf':
        reader = PdfReader(path)
        return "\n".join(p.extract_text() or "" for p in reader.pages)
    if ext in ('docx', 'doc'):
        doc = docx.Document(path)
        return "\n".join(p.text for p in doc.paragraphs)
    if ext == 'json':
        return open(path, 'r', encoding='utf-8').read()
    raise ValueError(f"Unsupported type: {ext}")

def process_and_upsert(path):
    text = extract_text(path)
    vector = model.encode(text).tolist()
    doc_id = os.path.splitext(os.path.basename(path))[0]
    # Upsert to Pinecone
    index.upsert(vectors=[(doc_id, vector, {"file_name": os.path.basename(path)})])
    return doc_id

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        print(process_and_upsert(sys.argv[1]))