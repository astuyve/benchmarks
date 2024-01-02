FROM public.ecr.aws/lambda/python:3.11
COPY app.py ./
COPY requirements.txt ./
RUN python3 -m pip install -r requirements.txt
CMD ["app.handler"]
