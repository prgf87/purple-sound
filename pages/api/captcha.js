const key = process.env.RECAPTCHA_SECRET;

export default async function handler(req, res) {
  const { token } = req.body;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${token}`,
    {
      method: 'POST',
    }
  );

  const parsedResponse = await response.json();

  if (parsedResponse.success === true) {
    return res.status(200).send({ message: 'Success' });
  } else {
    return res
      .status(402)
      .send({ message: "That didn't work, please try again" });
  }
}
