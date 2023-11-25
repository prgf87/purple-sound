const captchaKey = process.env.RECAPTCHA_SECRET;

export default async function handler(req, res) {
  console.log(captchaKey);
  const { token } = req.body;
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      secret: captchaKey,
      response: token,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const parsedResponse = await response.json();

  console.log('###RESPONSE: ', parsedResponse);
  if (response.status === 200) {
    // return res.status(200).send({ message: 'Success' });
  } else {
    return res
      .status(402)
      .send({ message: "That didn't work, please try again" });
  }
}
