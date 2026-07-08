# Desktop-Login für GitHub Pages

Diese Seite ist eine statische, Windows-ähnliche Login-Oberfläche für GitHub Pages.

## Anmeldedaten

Die Zugangsdaten werden lokal über die Datei .env.local festgelegt und nicht ins Repository hochgeladen.

Beispiel:

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=dein_echtes_passwort_hier
MUTH_USERNAME=Muth
MUTH_PASSWORD=dein_echtes_passwort_hier
```

## GitHub Pages

Die Seite kann direkt als statische Website veröffentlicht werden. Eine GitHub-Actions-Workflow-Datei ist bereits enthalten.

## Passwort- und Secret-Schutz

- Lege lokale Geheimnisse in .env.local an.
- Füge .env.local zu .gitignore hinzu.
- Für GitHub Actions verwende GitHub Secrets.
- Nutze niemals Passwörter oder API-Keys direkt im Frontend-Code.
- Bei versehentlichem Commit von Geheimnissen sofort die Zugangsdaten rotieren.
