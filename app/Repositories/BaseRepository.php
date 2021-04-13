<?php
namespace App\Repositories;

abstract class BaseRepository {
    /**
     * Model variable
     *
     * @var object
     */
    protected $model;

    /**
     * get paginated records
     *
     * @param integer $limit
     * @param integer $offset
     * @return array
     */
    public function findPaginated(int $limit=10, $offset = 0): array {
        //get total record count
        $count = $this->model->count();

        $data = $this->paginated($offset, $limit)
        ->orderBy('created_at', 'desc')
        ->get();

        return ['data' => $data, 'total' => $count];
    }

    /**
     * get record by slug
     *
     * @param [type] $id
     * @return void
     */
    public function getSingleById($id){
        return $this->model->find($id);
    }

    /**
     * Delete record by ID
     *
     * @param [type] $id
     * @return void
     */
    public function deleteById($id){
        return $this->model->where('id',$id)->delete();
    }

    /**
     * Create new record
     *
     * @param array $data
     * @return object
     */
    public function create(array $data){
        return $this->model->create($data);
    }

    /**
     * Pagination helper
     *
     * @param integer $page
     * @param integer $limit
     * @return object
     */
    protected function paginated($page, $limit){
        $offset = ($page - 1) * $limit;
        
        return $this->model
        ->offset($offset)
        ->limit($limit);
    }

    /**
     * Get all records
     *
     * @return collection
     */
    public function all(){
        return $this->model->all();
    }
}