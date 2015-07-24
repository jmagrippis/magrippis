<?php

namespace Magrippis\Http\Controllers;

use Illuminate\Http\Request;

use Magrippis\Http\Requests;

class EmailsController extends Controller
{
    /**
     * Sends a contact email.
     *
     * @param  Request $request
     * @return Response
     */
    public function contact(Request $request)
    {
        $user = $request->only('name', 'email', 'message', 'subject');

        \Mail::send(['emails.contact', 'emails.text.contact'], compact('user'), function ($message) use ($user) {
            $message->from($user['email'], $user['name'])
                ->to(env('ADMIN_EMAIL'), env('ADMIN_FIRST_NAME') . ' ' . env('ADMIN_LAST_NAME'))
                ->subject('Contacted via magrippis.com');
        });

        return ['message' => 'Your message has been sent successfully!'];
    }
}
