from pinecone import Pinecone
import os
from dotenv import load_dotenv

load_dotenv()
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
# (If using serverless specs, also pass environment=os.getenv("PINECONE_ENVIRONMENT"))
print(pc.list_indexes().names())