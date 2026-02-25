import JSZip from 'jszip';
import { saveAs } from 'file-saver';

/**
 * ZIP file ko flatten karne ka main function
 * @param {File} mainFile - User ki upload ki hui original ZIP file
 */
export const flattenZip = async (mainFile) => {
    const zip = new JSZip();
    const newZip = new JSZip();
    
    try {
        // 1. Original ZIP ko load karo
        const content = await zip.loadAsync(mainFile);
        
        // 2. Har file par loop chalao
        const files = Object.keys(content.files);
        
        for (const relativePath of files) {
            const fileData = content.files[relativePath];
            
            // Sirf files pakdo, folders ko ignore karo
            if (!fileData.dir) {
                // 3. Path ko Rename karo (app/page.js -> app--page.js)
                // Yahan hum '--' use kar rahe hain jo ki safe hai
                const newFileName = relativePath.replaceAll('/', '--');
                
                // File ka content (blob) nikalo
                const fileBlob = await fileData.async('blob');
                
                // 4. Naye ZIP mein root level par add karo
                newZip.file(newFileName, fileBlob);
            }
        }
        
        // 5. Naya flattened ZIP generate karo
        const generatedZip = await newZip.generateAsync({ type: 'blob' });
        
        // 6. Download karwa do
        const originalName = mainFile.name.replace('.zip', '');
        saveAs(generatedZip, `${originalName}_flattened.zip`);
        
        return { success: true };
    } catch (error) {
        console.error("Flattening failed:", error);
        return { success: false, error: error.message };
    }
};
