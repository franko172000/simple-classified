<?php
namespace App\Repositories;

abstract class BaseRepository {
    protected $model;

    public function findPaginated(int $limit=10, $offset = 0): array {
        //get total record count
        $count = $this->model->count();

        $data = $this->paginated($offset, $limit)
        ->orderBy('created_at', 'desc')
        ->get();

        return ['data' => $data, 'total' => $count];
    }

    public function getSingleById($id){
        return $this->model->find($id);
    }

    public function deleteById($id){
        return $this->model->where('id',$id)->delete();
    }

    public function create(array $data){
        return $this->model->create($data);
    }

    protected function paginated($page, $limit){
        $offset = ($page - 1) * $limit;
        
        return $this->model
        ->offset($offset)
        ->limit($limit);
    }

    public function all(){
        return $this->model->all();
    }
}