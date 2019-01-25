package com.iesemilidarder.xml.rules.marshalling;

import com.iesemilidarder.xml.rules.SpringBootWebApplication;
import com.iesemilidarder.xml.rules.data.Restaurant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.File;
import java.util.prefs.Preferences;

/**
 * lince-scientific-base
 * com.deicos.lince
 * Created by alber in 24/02/2017.
 * Description:
 * <p>
 * Al hacer referencia a la applicacion javafx, tiene que estar en contexto server
 */
public class DataFileHelper {
    protected final Logger log = LoggerFactory.getLogger(this.getClass());
    public static final String PREFERENCES_FILE_PATH = "filePath";

    public DataFileHelper() {

    }

    /**
     * gets filepath from user preferences
     *
     * @return lastSavedFile
     */
    public File getProjectFilePath() {
        Preferences prefs = Preferences.userNodeForPackage(SpringBootWebApplication.class);
        String filePath = prefs.get(PREFERENCES_FILE_PATH, "./projectData.xml");
        if (filePath != null) {
            return new File(filePath);
        } else {
            return null;
        }
    }

    /**
     * Sets the file path of the currently loaded file. The path is persisted in
     * the OS specific registry.
     *
     * @param file the file or null to remove the path
     */
    public void setProjectPath(File file) {
        Preferences prefs = Preferences.userNodeForPackage(SpringBootWebApplication.class);
        if (file != null) {
            prefs.put(PREFERENCES_FILE_PATH, file.getPath());

        } else {
            prefs.remove(PREFERENCES_FILE_PATH);
        }
    }

    /**
     * Loads current file and sets it in datahubService
     *
     * @param file XML File with data
     */
    public DataWrapper loadProjectFromFile(File file) {
        try {
            JAXBContext context = getXMLContext();
            Unmarshaller um = context.createUnmarshaller();
            // Reading XML from the file and unmarshalling.
            DataWrapper wrapper = (DataWrapper) um.unmarshal(file);
            // Save the file path to the registry.
            setProjectPath(file);
            return wrapper;
        } catch (Exception e) { // catches ANY exception
            log.error("Error saving file", e);
            return null;
        }
    }

    private JAXBContext getXMLContext() throws JAXBException {
        return JAXBContext.newInstance(DataWrapper.class, Restaurant.class);
    }

    /**
     * Marshall data inside selected file
     *
     * @param file XML File to save data
     */
    public void saveProjectToFile(File file, DataWrapper data) {
        try {
            JAXBContext context = getXMLContext();
            Marshaller m = context.createMarshaller();
            m.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
            // Marshalling and saving XML to the file.
            m.marshal(data, file);
            // Save the file path to the registry.
            setProjectPath(file);
        } catch (Exception e) { // catches ANY exception
            log.error("Error saving file", e);
        }
    }

}
