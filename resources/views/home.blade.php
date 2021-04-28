@extends('layout.app')
@section('title','File Uploader')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Laravel Axios Multi File Uploader</h4>
                </div>
                <div class="card-body">
                    <button id="addNewFile" class="btn btn-sm btn-danger my-3">Add New</button>

                    <table class="table table-striped table-inverse  ">
                        <thead class="thead-inverse">
                            <tr>
                                <th>File</th>
                                <th>File Size</th>
                                <th>Uploaded (MB)</th>
                                <th>Uploaded (%)</th>
                                <th>Status</th>
                                <th>Options</th>
                            </tr>
                            </thead>
                            <tbody id="fileList">
                              
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection