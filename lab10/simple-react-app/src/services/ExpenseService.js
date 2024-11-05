import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../firebase";

const ExpensesService = {
  async getExpenses() {
    const expensesCollectionRef = collection(db, "expenses");
    const data = await getDocs(expensesCollectionRef);
    return data.docs.map((doc) => {
      const expenseData = { ...doc.data(), id: doc.id };
      if (expenseData.date) {
        expenseData.date = expenseData.date.toDate();
      }
      return expenseData;
    });
  },

  async addExpense(expenseData) {
    const docRef = await addDoc(collection(db, "expenses"), expenseData);
    return { ...expenseData, id: docRef.id };
  },

  async deleteExpense(id) {
    await deleteDoc(doc(db, "expenses", id));
  },

  async updateExpense(id, updatedData) {
    const expenseRef = doc(db, "expenses", id);
    await updateDoc(expenseRef, updatedData);
  },
};

export default ExpensesService;
