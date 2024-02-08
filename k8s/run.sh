# Run this file

kubectl  apply -f client-deployment.yml
kubectl  apply -f client-service.yml
kubectl  apply -f  server-deployment.yml
kubectl  apply -f  server-service.yml

kubectl  apply -f  ingres.yml

# kubectl expose deployment client --type=NodePort --port=3000
# minikube service client --url