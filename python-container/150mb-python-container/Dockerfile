FROM public.ecr.aws/lambda/python:3.11

COPY app.py requirements.txt ./

RUN python3 -m pip install -r requirements.txt

# You can overwrite command in `serverless.yml` template
CMD ["app.handler"]
