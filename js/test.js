// js/test.js - Version avec affichage à l'écran (mobile-friendly)
(async function testSupabase() {
    // Créer un conteneur pour le résultat
    const container = document.createElement('div');
    container.style.padding = '16px';
    container.style.margin = '20px auto';
    container.style.maxWidth = '500px';
    container.style.borderRadius = '12px';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.fontSize = '14px';
    container.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    container.style.backgroundColor = '#f5f5f5';
    container.style.color = '#333';
    container.style.lineHeight = '1.6';
    
    // Ajouter le conteneur en haut de la page
    document.body.prepend(container);
    
    container.innerHTML = '🔄 Test de connexion à Supabase en cours...<br><br>';
    
    try {
        // Récupérer les données de la table gold_prices
        const { data, error } = await supabase
            .from('gold_prices')
            .select('*')
            .limit(1);
        
        if (error) {
            // Erreur : afficher en rouge
            container.style.backgroundColor = '#ffebee';
            container.style.border = '2px solid #f44336';
            container.innerHTML = `
                ❌ <strong>Erreur de connexion</strong><br>
                Message : ${error.message}<br><br>
                <span style="font-size:12px;color:#666;">Vérifie que la table 'gold_prices' existe bien et que les clés API sont correctes.</span>
            `;
        } else {
            // Succès : afficher en vert
            container.style.backgroundColor = '#e8f5e9';
            container.style.border = '2px solid #4caf50';
            container.innerHTML = `
                ✅ <strong>Connexion réussie !</strong><br><br>
                📊 Données récupérées :<br>
                <pre style="background:#fff;padding:12px;border-radius:8px;font-size:12px;overflow-x:auto;">${JSON.stringify(data, null, 2)}</pre>
                <br><span style="font-size:12px;color:#666;">La base de données est accessible. Tu peux continuer !</span>
            `;
        }
    } catch (err) {
        // Erreur inattendue
        container.style.backgroundColor = '#ffebee';
        container.style.border = '2px solid #f44336';
        container.innerHTML = `
            ❌ <strong>Erreur inattendue</strong><br>
            Message : ${err.message}<br><br>
            <span style="font-size:12px;color:#666;">Vérifie que Supabase est bien chargé avant ce script.</span>
        `;
    }
})();
