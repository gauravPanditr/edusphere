import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    // Initialize the Webhook instance with your secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Extract Svix headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verify the webhook signature
    const evt = await whook.verify(req.body, headers);

    const { data, type } = evt;
    console.log("Hello", type);

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.create(userData);
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};
