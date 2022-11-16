FROM czechprz/nginx-react
RUN apt-get update -y
RUN apt-get install curl -y
RUN apt-get install sudo -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN apt-get install git -y
RUN mkdir ProjectPage
WORKDIR /ProjectPage
RUN git clone https://github.com/czechp/bsp-weight-monitoring-frontend.git .
RUN npm install
RUN npm run build
WORKDIR /ProjectPage/build
RUN rm -Rf /usr/share/nginx/html/*
RUN cp -R * /usr/share/nginx/html
