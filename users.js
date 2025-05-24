const { db } = require('./firebase-config');
const { collection, query, where, getDocs } = require('firebase/firestore');

class User {
  static async find(criteria) {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('reg_name', '==', criteria.reg_name));
      const querySnapshot = await getDocs(q);
      
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      
      return users;
    } catch (error) {
      console.error('Error finding users:', error);
      throw error;
    }
  }
}

module.exports = User;
