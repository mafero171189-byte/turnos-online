importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');
firebase.initializeApp({
    apiKey: "AIzaSyAz0trpUxBYqZ_Ws0TnKjXQLpsSlgf6wqQ",
    authDomain: "turno-facil-53956.firebaseapp.com",
    projectId: "turno-facil-53956",
    storageBucket: "turno-facil-53956.firebasestorage.app",
    messagingSenderId: "896497868092",
    appId: "1:896497868092:web:8c0deaf5bd7e7b5d51d239"
});
const messaging = firebase.messaging();
// Este evento se dispara cuando llega una notificación y la App está CERRADA
messaging.onBackgroundMessage((payload) => {
    console.log('Notificación en segundo plano recibida:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico', // O la URL de tu logo
        tag: 'turno-facil-notif',
        renotify: true
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
