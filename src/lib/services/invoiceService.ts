import { prisma } from '$lib/prisma';

export async function generateMonthlyInvoices(title:string) {
  const activeSubscriptions = await prisma.userSubscription.findMany({
    where: { isActive: true },
    include: { subscriptionPlan: true, user: true }
  });

  const invoicePromises = activeSubscriptions.map((subscription) => {
    return prisma.invoice.create({
      data: {
        title: title,
        userId: subscription.userId,
        amount: subscription.subscriptionPlan.price,
        dueDate: new Date(new Date().setDate(30)), 
        paid: false
      }
    });
  });

  await Promise.all(invoicePromises);
  console.log('Invoices generated for all active users.');
}
