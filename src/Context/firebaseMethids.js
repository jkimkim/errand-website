import { auth, storage, db } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  endAt,
  startAt,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collectionGroup,
  onSnapshot,
  addDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  uploadBytesResumable,
} from "firebase/storage";
import { useState, useEffect } from "react";
import { set } from "firebase/database";

// submit request form
export const submitRequest = async (request) => {
  try {
    // Add a new document with a generated id.
    const id = request.userId + "_" + Date.now();

    const docRef = doc(db, "requests", id);
    await setDoc(docRef, request);
    console.log("Request submitted successfully");
  } catch (error) {
    console.error("Error submitting request:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

// get all requests
export const getRequests = async () => {
  const requests = [];
  const q = query(collection(db, "requests"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    requests.push(doc.data());
  });
  return requests;
};

// get a single request
export const getRequest = async (id) => {
  const docRef = doc(db, "requests", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

// delete a request

export const deleteRequest = async (id) => {
  await deleteDoc(doc(db, "requests", id));
};

// update a request
export const updateRequest = async (id, request) => {
  const docRef = doc(db, "requests", id);
  await updateDoc(docRef, request);
};

// get all requests by user
export const getRequestsByUser = async (userId) => {
  const requests = [];
  const q = query(collection(db, "requests"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    requests.push(doc.data());
  });
  return requests;
};

// get all requests by category

export const getRequestsByCategory = async (category) => {
  const requests = [];
  const q = query(
    collection(db, "requests"),
    where("category", "==", category)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    requests.push(doc.data());
  });
  return requests;
};

// get all requests by status

export const getRequestsByStatus = async (status) => {
  const requests = [];
  const q = query(collection(db, "requests"), where("status", "==", status));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    requests.push(doc.data());
  });
  return requests;
};

// get logged in user details from local storage
export const getUser = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
};

// get uid of logged in user
export const getUserId = () => {
  return getUser() ? getUser().uid : null;
};

// get user profile from firestore by uid and set it in local storage
export const getUserProfile = async (uid) => {
  const docRef = doc(db, "Users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const user = docSnap.data();
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } else {
    return null;
  }
};

// update user profile on firestore
export const updateUserProfile = async (user) => {
  const userRef = doc(db, "Users", user.uid);
  await updateDoc(userRef, user);
};

// sign out
export const signOutUser = async () => {
  await signOut(auth);
};

// login user with email and password and set user in local storage
export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
  const user = auth.currentUser;
  const userProfile = await getUserProfile(user.uid);
  return userProfile;
};
