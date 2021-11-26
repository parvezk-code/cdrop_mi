import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const fbConfig = require('./firebaseConfig.json');
const firebaseApp = initializeApp(fbConfig);
const db = getFirestore(firebaseApp);

export const getCompanyDetails = async () => {
    const agentsCollectionRef = collection(db, 'company/company1/agents');
    const agentsList = await getDocs(agentsCollectionRef);
    agentsList.forEach(agent => {
        console.log(agent.data());
    });
}
