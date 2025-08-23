import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, subject, budget, timeline, message } =
      await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Configuration du transporteur d'email
    // Vous devrez configurer ces variables d'environnement
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou votre service de messagerie
      auth: {
        user: process.env.EMAIL_USER, // votre email
        pass: process.env.EMAIL_PASS, // votre mot de passe d'application
      },
    });

    // Template d'email
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #ff6243; margin-bottom: 20px; text-align: center;">📧 Nouveau message depuis votre portfolio</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #2d3748; margin-bottom: 15px;">Informations du contact :</h3>
            <p style="margin: 8px 0;"><strong>👤 Nom :</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>📧 Email :</strong> ${email}</p>
            ${
              phone
                ? `<p style="margin: 8px 0;"><strong>📱 Téléphone :</strong> ${phone}</p>`
                : ""
            }
            ${
              subject
                ? `<p style="margin: 8px 0;"><strong>📝 Sujet :</strong> ${subject}</p>`
                : ""
            }
            ${
              budget
                ? `<p style="margin: 8px 0;"><strong>💰 Budget :</strong> ${budget}</p>`
                : ""
            }
            ${
              timeline
                ? `<p style="margin: 8px 0;"><strong>⏰ Délai :</strong> ${timeline}</p>`
                : ""
            }
          </div>
          
          <div style="background-color: #f0f7ff; padding: 20px; border-radius: 8px; border-left: 4px solid #ff6243;">
            <h3 style="color: #2d3748; margin-bottom: 15px;">💬 Message :</h3>
            <p style="line-height: 1.6; color: #4a5568; white-space: pre-line;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #718096; font-size: 14px;">Envoyé depuis votre portfolio • ${new Date().toLocaleString(
              "fr-FR"
            )}</p>
          </div>
        </div>
      </div>
    `;

    // Options d'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Votre email pour recevoir les messages
      replyTo: email, // Email du client pour pouvoir répondre directement
      subject: `🚀 Portfolio Contact: ${subject || name}`,
      html: htmlTemplate,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Email de confirmation automatique au client
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Message reçu - Landry Ouarma Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #ff6243; margin-bottom: 20px; text-align: center;">Message bien reçu !</h2>
            
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px;">Bonjour ${name},</p>
            
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
              Merci pour votre message ! J'ai bien reçu votre demande et je vous répondrai dans les plus brefs délais, généralement sous 24h.
            </p>
            
            <div style="background-color: #f0f7ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff6243;">
              <p style="color: #2d3748; margin: 0;"><strong>Récapitulatif de votre message :</strong></p>
              <p style="color: #4a5568; margin: 10px 0 0 0;">"${message.substring(
                0,
                100
              )}${message.length > 100 ? "..." : ""}"</p>
            </div>
            
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
              En attendant, n'hésitez pas à consulter mes projets ou à me suivre sur mes réseaux sociaux.
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #ff6243; font-weight: bold; margin-bottom: 5px;">Landry Ouarma</p>
              <p style="color: #718096; font-size: 14px;">Full-Stack Developer & DevOps Enthusiast</p>
              <p style="color: #718096; font-size: 14px;">landryouarma45@gmail.com</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      {
        success: true,
        message:
          "Email sent successfully! You will receive a confirmation email shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error:
          "Failed to send email. Please try again later or contact me directly.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
