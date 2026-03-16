# 🚀 WaLinz Enterprise — Manual de Usuario

<div align="center">
  <img src="favicon.svg" width="80" alt="WaLinz Logo">
  <h3>Sistema de Gestión de Ventas</h3>
  <p>v1.0.0 · PWA · Offline-First · Liquid Glass UI</p>
</div>

---

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Credenciales Iniciales](#credenciales)
4. [Módulos del Sistema](#módulos)
5. [API Gateway — Explicación Detallada](#api-gateway)
6. [Arquitectura Técnica](#arquitectura)
7. [FAQ](#faq)

---

## 🎯 Introducción

**WaLinz Enterprise** es un software de gestión de ventas completo que funciona como Progressive Web App (PWA). Está diseñado para vendedores de campo y empresas en Latinoamérica, con soporte offline total, facturación PDF, CRM avanzado, geomarketing con mapas y un sistema de rutas GPS.

### Características principales:
- ✅ **100% Offline** — Funciona sin internet, sincroniza cuando hay conexión
- ✅ **Facturación PDF** — Genera facturas descargables y compartibles por WhatsApp
- ✅ **CRM con clasificación ABC** — Gestiona clientes con historial y promesas de pago
- ✅ **Geomarketing** — Mapas interactivos con clustering de clientes (Leaflet.js)
- ✅ **WaLinz Drive** — Sistema de zonas para canalizar clientes por áreas
- ✅ **Rutas & GPS** — Hoja de ruta diaria con check-in verificado por GPS (Geofencing 200m)
- ✅ **API Gateway** — Conectividad universal con cualquier ERP externo
- ✅ **PWA Instalable** — Se instala como app nativa en móvil/desktop
- ✅ **Hasta 50 administradores** — Sistema multiusuario con roles
- ✅ **Interfaz Liquid Glass** — Diseño moderno con efectos glassmorphism

---

## 💻 Instalación

### Opción 1: Hosting Estático (Recomendado)
```bash
# Crea la carpeta del proyecto
mkdir walinz-enterprise && cd walinz-enterprise

# Coloca los 4 archivos:
# - index.html
# - sw.js
# - manifest.json
# - favicon.svg

# Prueba localmente
npx serve .
# Abre http://localhost:3000