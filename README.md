# BMSBF Website - Installation Guide

Ce site web est conçu pour être facilement déployé sur un serveur local XAMPP.

## Installation avec XAMPP

1. **Installer XAMPP**
   - Téléchargez XAMPP depuis [https://www.apachefriends.org/](https://www.apachefriends.org/)
   - Installez XAMPP en suivant les instructions pour votre système d'exploitation

2. **Déployer le site**
   - Extrayez le fichier `bmsbf-website.zip`
   - Copiez tous les fichiers extraits dans le dossier htdocs de XAMPP :
     * Windows : `C:\xampp\htdocs\bmsbf`
     * Linux : `/opt/lampp/htdocs/bmsbf`
     * macOS : `/Applications/XAMPP/htdocs/bmsbf`

3. **Démarrer le serveur**
   - Lancez XAMPP Control Panel
   - Démarrez le service Apache
   - Ouvrez votre navigateur et accédez à :
     ```
     http://localhost/bmsbf
     ```

## Structure du site

Le site comprend :
- Une page d'accueil moderne avec animation de défilement fluide
- Une section Services avec effets de survol interactifs
- Design responsive adapté à tous les écrans
- Optimisation des images pour de meilleures performances

## Développement

Ce site est construit avec :
- Next.js
- Tailwind CSS
- JavaScript moderne

Pour le développement local :
1. Installez Node.js
2. Exécutez `npm install`
3. Lancez `npm run dev`
4. Ouvrez `http://localhost:3000`
