# anniversariesGoogleCalendar

### Metainformation  
Author: [JohnDOEbug](http://github.com/JohnDOEbug)  
Publishing time: 11-2024
Org Repo: https://github.com/JohnDOEbug/anniversariesGoogleCalendar

---
---

## Beschreibung
Das [Google Apps Script](https://script.google.com) "[anniversariesGoogleCalendar.gs](anniversariesGoogleCalendar.gs)" synchronisiert Geburtstage und besondere Ereignisse aus [Google Kontakten](https://contacts.google.com) mit einem ausgewählten [Google Kalender](https://calendar.google.com). Es ruft alle relevanten Kontaktdaten (Name, Ereignisse, Ressourcen-ID) ab und vergleicht sie mit bestehenden Kalendereinträgen. Bei Bedarf werden Einträge hinzugefügt oder gelöscht, um den Kalender aktuell zu halten. Jeder Kalendereintrag ist eine jährlich wiederkehrende Terminserie, die im aktuellen Jahr beginnt. Die Ressourcen-ID jedes Kontakts wird in der Terminbeschreibung gespeichert und ermöglicht eine eindeutige Zuordnung zwischen Kontakt und Termin. Optional wird der Benutzer per E-Mail über die Erstellung und Löschung von Ereignissen informiert.

## Benutzung
* Öffne [Google Apps Script](https://script.google.com) und lege ein neues Projekt an.
* Kopiere den Inhalt des Skripts [anniversariesGoogleCalendar.gs](anniversariesGoogleCalendar.gs) in das Projekt.
* Füge die People API hinzu ([+ Dienste] > [Peopleapi] [v1] > [Hinzufügen]).
* Öffne [Google Kalender](https://calendar.google.com) und erstelle einen neuen Kalender ([+ Weitere Kalender] > [Neuen Kalender erstellen] > Namen eingeben > [Kalender erstellen]).
* Ermittele die Kalender-ID (Kalender links auswählen > [Kalendereinstellungen] > Kalender-ID).
* Setze den Wert der Variable `calendarId` im Skript [anniversariesGoogleCalendar.gs](anniversariesGoogleCalendar.gs) auf die ermittelte Kalender-ID, durch ersetzen des Platzhalters `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@group.calendar.google.com`.
* Optional: Kopiere die eigene E-Mail-Adresse in den Wert der Variable `recipientEmail` (z. B.: `var recipientEmail = 'anything@mailexample.com';`).
* Führe das Skript einmalig manuell aus (> [Ausführen]) und akzeptiere die angeforderten Berechtigungen (Kontakte, Kalender und E-Mails). Die Warnung "Google hat diese App nicht überprüft" muss akzeptiert werden, wobei unter Entwickler der eigene Google-Account genannt sein sollte (> [Erweitert] > [Unbekanntes Projekt öffnen (unsicher)]). Nach der Ausführung des Skripts (siehe Ausführungsprotokoll im unteren Bereich des Fensters) sollten bereits alle Termine im Kalender erstellt worden sein.
* Setze einen Trigger für das Projekt (z. B.: Links [Trigger] auswählen > [Trigger hinzufügen] > Auszuführende Funktion: anniversaryEvents, Ereignisquelle: Zeitgesteuert, Zeitbasierter Trigger: Tagestimer, Tageszeit: 8:00 bis 9:00 Uhr > [Speichern]). Nun wird das Skript, abhängig vom Trigger, z. B. täglich ausgeführt.

---
---

## Description
The [Google Apps Script](https://script.google.com) "[anniversariesGoogleCalendar.gs](anniversariesGoogleCalendar.gs)" synchronizes birthdays and special events from [Google Contacts](https://contacts.google.com) with a selected [Google Calendar](https://calendar.google.com). It retrieves all relevant contact information (name, events, resource ID) and checks it against existing calendar entries. Entries are added or removed as needed to keep the calendar up-to-date. Each calendar entry is set as a series with yearly events, starting in the current year. The resource ID of each contact is stored in the event description to ensure a unique link between the contact and the event. Optionally, the user can receive email notifications for the creation and deletion of events.

## How to use
* Open [Google Apps Script](https://script.google.com) and create a new project.
* Copy the contents of the script [anniversariesGoogleCalendar.gs](anniversariesGoogleCalendar.gs) into the project.
* Add the People API ([+ Services] > [Peopleapi] [v1] > [Add]).
* Open [Google Calendar](https://calendar.google.com) and create a new calendar ([+ Other calendars] > [Create new calendar] > Enter a name > [Create calendar]).
* Retrieve the calendar ID (select the calendar on the left > [Calendar settings] > Calendar ID).
* Set the variable `calendarId` in the script [anniversariesGoogleCalendar.gs](anniversariesGoogleCalendar.gs) to the retrieved calendar ID by replacing the placeholder `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@group.calendar.google.com`.
* Optionally, copy your own email address into the `recipientEmail` variable (e.g., `var recipientEmail = 'anything@mailexample.com';`).
* Run the project manually once (> [Run]) and accept the requested permissions (Contacts, Calendar, and Email). You will need to accept the "Google hasn’t verified this app" warning, ensuring your own Google account appears under Developer (> [Advanced] > [Go to Untitled project (unsafe)]). After the script completes (see the Execution Log at the bottom of the window), all calendar events should already be created.
* Set a trigger for the project (e.g., select [Triggers] on the left > [Add Trigger] > Function to run: anniversaryEvents, Event source: Time-driven, Time based trigger: Day timer, Time of day: 8am to 9am > [Save]). The script will now run according to the trigger, e.g., daily.

---
---
