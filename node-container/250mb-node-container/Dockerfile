FROM public.ecr.aws/lambda/nodejs:18

COPY app.js package.json ./
RUN npm install

# You can overwrite command in `serverless.yml` template
CMD ["app.handler"]
