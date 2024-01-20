echo "Getting all deployment list"
kubectl get deployment

echo "deleting client and backend deployment"

kubectl delete deployment client
kubectl delete deployment backend

echo "Getting all services list"
kubectl get services

echo "deleting client and backend service"
kubectl delete service client-service
kubectl delete service backend-service

echo "deleting Ingress"
kubectl delete ingress dockertest-ingres