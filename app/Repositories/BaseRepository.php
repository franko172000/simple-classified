<?php
namespace App\Repositories;

abstract class BaseRepository {
    protected $model;

    public function findAll(int $limit=10, $offset = 0): array {
        //get total record count
        $count = $this->model->count();

        $data = $this->paginated($offset, $limit)->get();

        return ['data' => $data, 'total' => $count];
    }

    public function getSingleById($id){
        return $this->model->find($id);
    }

    public function create(array $data){
        return $this->model->create($data);
    }

    protected function paginated($offset, $limit){
        return $this->model
        ->offset($offset)
        ->limit($limit);
    }
}