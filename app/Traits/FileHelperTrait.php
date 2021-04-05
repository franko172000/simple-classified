<?php 

namespace App\Traits;

trait FileHelperTrait {

    /**
     * This function handles deleting existing file
     * 
     * @param String $file_path
     * @return void
     */
    public function removeExistingFile($file_path) {
        if ($this->checkFile($file_path))
            unlink(public_path($file_path));
    }

    /**
     * This function handles uploading a file
     * 
     * @param Object $file
     * @param String $file_path
     * @return String
     */
    public function handleFileUpload($file, $file_path) {
        $newFileName  = uniqid()."-".uniqid();
        $extension    = $file->getClientOriginalExtension();
        $newPhotoName  = $newFileName.'.'.$extension;
        $path         = $file->storeAs($file_path, $newPhotoName);

        return $newPhotoName;
    }

    /**
     * Checks if a file exist.
     * @param string $file
     * @return bool
     */
    public function checkFile($file='') : bool
    {
        $file       = "/".ltrim($file, "/");
        $filePath   = public_path($file);
        return (!empty($filePath) && is_file($filePath) && file_exists($filePath)) ? TRUE : FALSE;
    }
}