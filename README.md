# jdm-expo-backend-platform
Parent repository containing Git submodules for all Spring Cloud microservice platform components (Config Server, Eureka Service Registry, and API Gateway) in the JDM Expo platform.<br> <br>
* **Student Name:** A.G.Asan Indusara
* **Student Number:** 241722063
* **GCP Project ID:** project-83f3b203-b60d-481d-89d <br> <br>
From this parent repository, all associated platform submodule repositories are directly navigable 
## Submodules Included
* [`apex-jdm-config-server`](https://github.com/AsanI2003/jdm-expo-config-server)
* [`apex-jdm-eureka-server`](https://github.com/AsanI2003/jdm-expo-eureka-server)
* [`apex-jdm-api-gateway`](https://github.com/AsanI2003/jdm-expo-api-gateway)
## Setup & Cloning Instructions
1. To clone this parent repository along with all attached platform submodules in a single step, use the --recurse-submodules flag:


git clone --recurse-submodules [https://github.com/AsanI2003/jdm-expo-backend-platform.git](https://github.com/AsanI2003/jdm-expo-backend-platform.git) <br> <br>
2. Navigate to the project folder <br> <br>
cd apex-jdm-backend-platform <br> <br>
## If you have already cloned the repository without submodules, run:
git submodule update --init --recursive

## Execution Order
When starting the platform locally, launch the submodules in the following sequence:

jdm-expo-config-server (Port 8888)

jdm-expo-eureka-server (Port 8761)

jdm-expo-api-gateway (Port 8080)
