<h1>Hey Johnny!</h1>

<h3>Looks like someone wants to get in touch!</h3>

<p>Their name is <strong>{{ $user['name'] }}</strong> and they leave a message:</p>
<p style="margin: 2rem 0; padding: 1rem 0; font-size: 1.4rem">{{ $user['message'] }}</p>
<p>As seen on the header, their email is {{ $user['email'] }}.</p>
<p>Have a wonderful day!</p>

<p style="margin-top: 2rem; font-style: italic">- Your site's friendly email handler.</p>