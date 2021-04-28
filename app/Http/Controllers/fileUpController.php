<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class fileUpController extends Controller
{
    function onUpload(Request $request)
    {
        $request->file('fileKey')->store('files');
    }
}
