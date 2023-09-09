from fastapi import FastAPI

app = FastAPI()

@app.get("/api/python")
def hello_world():
    '''
    Returns a simple JSON object
    '''
    return {"message": "Hello World"}
