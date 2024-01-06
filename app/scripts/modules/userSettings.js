export function setUserSettings(newSettings) {
  try {
    const existingSettingsJSON = localStorage.getItem("userSettings");
    const existingSettings = JSON.parse(existingSettingsJSON) || {};

    const mergedSettings = { ...existingSettings, ...newSettings };

    const mergedSettingsJSON = JSON.stringify(mergedSettings);

    localStorage.setItem("userSettings", mergedSettingsJSON);

    console.log("User settings saved successfully.");
  } catch (error) {
    console.error("Error saving user settings:", error);
  }
}

export function getUserSettings() {
  try {
    const settingsJSON = localStorage.getItem("userSettings");
    const settings = JSON.parse(settingsJSON) || {};
    return settings;
  } catch (error) {
    console.error("Error retrieving user settings:", error);
    return null;
  }
}
