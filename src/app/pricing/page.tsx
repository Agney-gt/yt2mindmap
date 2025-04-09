"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, Zap, Users } from "lucide-react"
import { AnimatedSection } from "../components/animated-section"
import { motion } from "framer-motion"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import Turnstile from "@/components/Turnstile" // Updated import path
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const PAYPAL_CLIENT_ID = "AUMwCW2Ur--qNjc7X-ilOTASRgfJ1M7V0_KbwjoBfpj8JG1Du5PKXVrXjqe2EDNPdMEYhM9EI4XysYbs"
const SUBSCRIPTION_PLAN_ID = "P-4PG42392PX8907703M7IH2LQ"

export default function PricingPage() {
  const [isVerified, setIsVerified] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "free",
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      period: "forever",
      icon: <Zap className="h-5 w-5" />,
      features: [
        "2 Verifications per Day",
        "Basic Content Editor",
        "Thread Creation",
        "Basic Analytics",
        "Community Support",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      buttonAction: () => (window.location.href = "/signup"),
    },
    {
      id: "standard",
      name: "Standard Plan",
      description: "Best value for individuals",
      price: "$49",
      period: "one-time",
      popular: true,
      icon: <Sparkles className="h-5 w-5" />,
      features: [
        "10 Verifications per Day",
        "Advanced Content Editor",
        "Enhanced Thread Creation",
        "Basic Analytics",
        "Priority Support",
        "Personal Workspace",
        "Lifetime Access",
      ],
      buttonText: "Purchase Now - $49",
      buttonVariant: "default" as const,
      buttonAction: () => (window.location.href = "https://payhip.com/order?link=KSaXZ"),
    },
    {
      id: "pro",
      name: "Pro Plan",
      description: "For power users",
      price: "$5",
      period: "month",
      icon: <Users className="h-5 w-5" />,
      features: [
        "Unlimited Verifications",
        "Advanced Content Editor",
        "Unlimited Thread Creation",
        "Advanced Analytics",
        "Priority Support",
        "Team Collaboration",
        "Early Access to New Features",
      ],
      buttonText: "Subscribe",
      buttonVariant: "default" as const,
      requiresVerification: true,
    },
  ]

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes 2 verifications per day, basic content editing features, thread creation, and basic analytics. It's perfect for casual users.",
    },
    {
      question: "Can I upgrade or downgrade at any time?",
      answer:
        "Yes! You can upgrade to the Pro plan whenever you need more features, or downgrade back to the free plan at any time.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Due to the digital nature of our services, all sales are final. Refunds will only be granted in cases of duplicate payments, technical issues preventing service access, or service unavailability. Refund requests must be submitted within 7 days of purchase.",
    },
    {
      question: "Is there a long-term contract?",
      answer:
        "No, our Pro plan is billed monthly and you can cancel at any time. There are no long-term commitments required.",
    },
  ]

  return (
    <PayPalScriptProvider
      options={{
        clientId: PAYPAL_CLIENT_ID,
        vault: true,
        intent: "subscription",
      }}
    >
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <AnimatedSection className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Choose the plan that works best for you
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center gap-2 pt-4"
              >
                <Badge variant="outline" className="px-4 py-1 text-sm">
                  No hidden fees
                </Badge>
                <Badge variant="outline" className="px-4 py-1 text-sm">
                  Cancel anytime
                </Badge>
                <Badge variant="outline" className="px-4 py-1 text-sm">
                  Secure payments
                </Badge>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <AnimatedSection delay={0.2} className="py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-center">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card
                    className={`h-full flex flex-col relative overflow-hidden ${
                      plan.popular ? "border-primary shadow-lg" : "border shadow"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-md">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    <CardHeader className={`pb-4 ${plan.popular ? "bg-primary/5" : ""}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`p-1.5 rounded-full ${plan.popular ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                        >
                          {plan.icon}
                        </div>
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col space-y-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">/{plan.period}</span>
                      </div>
                      <ul className="space-y-3 flex-1">
                        {plan.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 + 0.5 }}
                            className="flex items-center gap-3"
                          >
                            <div className="rounded-full bg-primary/10 p-1">
                              <Check className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4 pt-6">
                      {plan.id === "pro" && (
                        <div className="w-full border-t pt-4">
                          <h4 className="font-semibold mb-2">Refund Policy</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Due to the digital nature of our services, all sales are final. Refunds will only be granted
                            in cases of:
                            <ul className="list-disc pl-4 mt-2 space-y-1">
                              <li>Duplicate payments</li>
                              <li>Technical issues preventing service access</li>
                              <li>Service unavailability</li>
                            </ul>
                            Refund requests must be submitted within 7 days of purchase.
                          </p>
                        </div>
                      )}

                      {plan.id === "pro" ? (
                        <>
                          {!isVerified ? (
                            <div className="w-full flex flex-col items-center gap-4">
                              <Button
                                variant={plan.buttonVariant}
                                className="w-full"
                                onClick={() => setSelectedPlan(plan.id)}
                              >
                                {plan.buttonText}
                              </Button>
                              {selectedPlan === plan.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  className="w-full flex flex-col items-center gap-4"
                                >
                                  <p className="text-sm text-muted-foreground text-center">
                                    Please verify that you are human to continue
                                  </p>
                                  <Turnstile onVerify={() => setIsVerified(true)} />
                                </motion.div>
                              )}
                            </div>
                          ) : (
                            <div className="w-full flex flex-col gap-4">
                              <label className="flex items-start gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="mt-1"
                                  onChange={async (e) => {
                                    setIsAgreed(e.target.checked)
                                    if (e.target.checked) {
                                      try {
                                        const response = await fetch("/api/tos-check", {
                                          method: "POST",
                                          headers: { "Content-Type": "application/json" },
                                        })
                                        if (!response.ok) {
                                          console.error("Failed to update TOS status")
                                          setIsAgreed(false)
                                        }
                                      } catch (error) {
                                        console.error("Error updating TOS status:", error)
                                        setIsAgreed(false)
                                      }
                                    }
                                  }}
                                />
                                <span className="text-sm text-muted-foreground">
                                  By checking this box, you acknowledge and agree to our Refund Policy. You understand
                                  that PayPals buyer protection policies may still apply.
                                </span>
                              </label>
                              {isAgreed && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <PayPalButtons
                                    style={{ layout: "vertical", shape: "rect", color: "gold", label: "subscribe" }}
                                    createSubscription={(data, actions) =>
                                      actions.subscription.create({ plan_id: SUBSCRIPTION_PLAN_ID })
                                    }
                                    onApprove={async (data) => {
                                      alert(`Subscription successful! ID: ${data.subscriptionID}`)
                                      return Promise.resolve()
                                    }}
                                  />
                                </motion.div>
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <Button
                          variant={plan.buttonVariant}
                          className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                          onClick={plan.buttonAction}
                        >
                          {plan.buttonText}
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={0.4} className="py-20 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Still have questions? Contact our support team at{" "}
                <a href="mailto:support@example.com" className="text-primary hover:underline">
                  support@example.com
                </a>
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                >
                  <AccordionItem value={`item-${idx}`} className="border rounded-lg px-4 mb-4">
                    <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.6} className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 md:p-12 text-white text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied users who have already upgraded their experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Sign up for free
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact sales
                </Button>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </PayPalScriptProvider>
  )
}
