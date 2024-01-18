CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo "${CYAN} ===> Installing Frontend dependencies${NC}"
cd client && yarn
echo "${CYAN} ===> Installing backend dependencies${NC}"
cd .. && cd backend && cp .env.example .env && npm i
cd .. && cd client
yarn add -D concurrently
echo "${CYAN} Starting Client and Server 🚀 ${NC}"
yarn dev