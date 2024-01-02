FROM public.ecr.aws/lambda/python:3.11
# copy all code and lambda handler
COPY app.py ./
# COPY requirements.txt ./# install packages
# RUN python3 -m pip install -r requirements.txt# run lambda handler
# You can overwrite command in `serverless.yml` template
CMD ["app.handler"]
