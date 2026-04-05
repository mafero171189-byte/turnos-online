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
    const notificationTitle = payload.notification.title || payload.data?.title || 'Nuevo aviso de Turno Fácil';
    const notificationOptions = {
        body: payload.notification.body || payload.data?.body || 'Revisá tu panel.',
        icon: '/favicon.ico', // O la URL de tu logo
        tag: 'turno-facil-notif',
        renotify: true
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// --- LÓGICA AGREGADA PARA QUE FUNCIONE LA PWA Y NO SE CUELGUE ---

// 1. Obligar al Service Worker a tomar el control al instante
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// 2. Requisito OBLIGATORIO de Chrome para que aparezca el cartel de "Instalar App"
self.addEventListener('fetch', (event) => {
    // No hacemos nada, solo escuchamos para cumplir el requisito
});
