import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, CheckCircle, Clock, Compass, Lightbulb, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform your Youtube History into an Asset
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Honestly, I didnt think I would find anything beyond entertainment on YouTube, but heres what started shifting when I built this app.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/login">
                  <Button size="lg" className="gap-1">
                    Start Mapping <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>Trusted by 10,000+ learners with an average rating of 4.8/5</span>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center lg:justify-end">
                <div className="relative h-[350px] w-full max-w-[550px] overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=700&width=1200"
                    width={1200}
                    height={700}
                    alt="MindMapAI in action - converting a YouTube video into an interactive mind map"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/90 p-4 backdrop-blur">
                    <p className="text-sm font-medium">
                    &quot;Ive learned more from 10 minutes of mind mapping than from hours of passive watching.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Agitation */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Problem with Passive Learning
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                YouTube videos are designed for passive consumption, not active reflection.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col gap-2 rounded-lg border bg-background p-6">
                <h3 className="text-xl font-bold">Watching videos passively:</h3>
                <ul className="mt-2 space-y-4">
                  <li className="flex gap-2">
                    <Clock className="h-5 w-5 text-red-500 shrink-0" />
                    <span>Sit through hours of content, hoping to remember key points</span>
                  </li>
                  <li className="flex gap-2">
                    <Compass className="h-5 w-5 text-red-500 shrink-0" />
                    <span>Struggle to find that one crucial idea buried in a long discussion</span>
                  </li>
                  <li className="flex gap-2">
                    <Brain className="h-5 w-5 text-red-500 shrink-0" />
                    <span>Absorb information linearly without clear connections even after multiple re-watches</span>
                  </li>
                </ul>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="italic">
                    The average YouTube deep dive takes hours, but how much do you actually retain?
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-lg border bg-background p-6">
                <h3 className="text-xl font-bold">Converting videos into mind maps:</h3>
                <ul className="mt-2 space-y-4">
                  <li className="flex gap-2">
                    <Lightbulb className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Extract key insights instantly for quicker review</span>
                  </li>
                  <li className="flex gap-2">
                    <Brain className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Visualize connections between concepts for deeper understanding</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Reinforce learning through structured reflection</span>
                  </li>
                </ul>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="italic">
                    Use an AI assistant to skip the algorithm and research while the video plays, and get the most out of your time by taking notes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    The Pareto Principle of Learning
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A typical crash course might include 64 hours of lectures, 72 hours of discussions, and 32 hours of
                    expert interviews...
                  </p>
                  <p className="max-w-[600px] font-bold md:text-xl">
                    But the truth? Youll only use 20% of what you watch.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Capture only the essentials (no information overload)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Use AI to structure insights effortlessly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Turn videos into a tool for deeper understanding</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/login">
                  <Button size="lg" className="gap-1">
                    Free Forever <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                  
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <div className="relative h-[350px] w-full max-w-[550px] overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=700&width=1200"
                    width={1200}
                    height={700}
                    alt="How MindMapAI transforms YouTube videos into interactive mind maps"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Learners Worldwide
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how MindMapAI is transforming the way people learn from online content.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="border bg-background">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${i}`}
                          width={40}
                          height={40}
                          alt={`Testimonial ${i}`}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-base">Fakename 1</CardTitle>
                        <CardDescription>Doomscroller</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex pb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                    &quot;I didn’t expect to feel creatively charged after just a few adjustments to my viewing habits… but here we are.&quot;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mx-auto max-w-5xl">
              <Card className="border bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        width={48}
                        height={48}
                        alt="Dr. Sarah Peterson"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>Fakename 2</CardTitle>
                      <CardDescription>
                      Connoisseur of Brainrot</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                  &quot;I used to assume people who gained from YouTube were just naturally disciplined. Turns out, a small tweak made a big difference&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Features */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Active Learning
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to transform passive watching into active learning and balance consumption with creation.
              </p>
            </div>
            <Tabs defaultValue="extract" className="mx-auto max-w-5xl py-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="extract">Extract</TabsTrigger>
                <TabsTrigger value="organize">Organize</TabsTrigger>
                <TabsTrigger value="retain">Retain</TabsTrigger>
              </TabsList>
              <TabsContent value="extract" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">AI-Powered Insight Extraction</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Instant Key Point Detection</p>
                          <p className="text-sm text-muted-foreground">
                            Our AI identifies and extracts the most important concepts from any YouTube video in
                            seconds.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">AI Assistant</p>
                          <p className="text-sm text-muted-foreground">
                            Browse the web, skip the algorthm and get youtube video links!
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Multi-Language Support</p>
                          <p className="text-sm text-muted-foreground">
                            Extract insights from videos in over 30 languages and even translate them to your preferred
                            language.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto flex items-center justify-center">
                    <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-lg border bg-background shadow-xl">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        width={800}
                        height={600}
                        alt="AI extracting key points from a YouTube video"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="organize" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Visual Knowledge Organization</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Intelligent Concept Mapping</p>
                          <p className="text-sm text-muted-foreground">
                            Our AI automatically organizes extracted concepts into a coherent mind map structure with quotes and practical insights, not just summary boxes.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Editable Mindmaps</p>
                          <p className="text-sm text-muted-foreground">
                            AI helps you get started, you can then enrich your mind maps to extend learning with the research assistant.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Minimize doomscrolling</p>
                          <p className="text-sm text-muted-foreground">
                            Watching yet another video, I decided to focus on the underlying message instead of just the flashy visuals.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto flex items-center justify-center">
                    <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-lg border bg-background shadow-xl">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        width={800}
                        height={600}
                        alt="Visual organization of concepts in a mind map"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="retain" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Knowledge Retention Tools</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Turn Your Youtube History into an Asset</p>
                          <p className="text-sm text-muted-foreground">
                          This approach worked for me — maybe it could be useful for one of you out there.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Knowledge Connection</p>
                          <p className="text-sm text-muted-foreground">
                            Our AI suggests connections between concepts across different mind maps to build a
                            comprehensive knowledge network.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Clean Dopamine</p>
                          <p className="text-sm text-muted-foreground">
                          Turns out, the secret isn’t just in watching less — it’s in consuming with intent and creating with purpose.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto flex items-center justify-center">
                    <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-lg border bg-background shadow-xl">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        width={800}
                        height={600}
                        alt="Knowledge retention tools and flashcards"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* About Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We believe that learning should be active, not passive. The zen concept of the Beginers Mind encourages lifelong learning and If you find yourself endlessly scrolling through YouTube, maybe this small tweak can help you as it helped me.
                  </p>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Over time, something just started feeling different—not a huge transformation, but a sense of control over my time.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <span className="text-lg font-bold text-primary-foreground">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">Agney Nalapat</p>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <div className="relative h-[350px] w-full max-w-[400px] overflow-hidden rounded-lg border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=700&width=800"
                    width={800}
                    height={700}
                    alt="MindMapAI founder working on the platform"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 ">
            <div className="mx-auto flex max-w-[58rem] flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ownership over Subscriptions
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border bg-background">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>For Doomscrollers</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>3 mind maps per day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Youtube History as an asset</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>No recurring fees.</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border bg-background relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For purposeful learners</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    $59.99<span className="text-base font-normal text-muted-foreground">/18 Months</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Unlimited mind maps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Boosts productivity.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Keeps the tool free</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>No subscription regret</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Discord Community for Builders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Anchor your learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Make Video Content Stick</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Access insights anytime</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Start Pro</Button>
                  <p className="mt-2 text-xs text-center text-muted-foreground">30-day money-back guarantee</p>
                </CardContent>
                
              </Card>
              <Card>
              <CardHeader>
                  <CardTitle>Build</CardTitle>
                  <CardDescription>For Entrepreneurs</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    $9.95<span className="text-base font-normal text-muted-foreground"> for 125 a page E-Book</span>
                  </div>
                </CardHeader>
              <CardContent>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>I was skeptical about using AI without breaking the bank... until I found this approach. (No API Keys required)</li>
                <li>We discovered a VC-backed startup with $5M in funding — leveraging their foundation helped us keep costs predictable.</li>
                <li>AI infrastructure is becoming more affordable, much like how railroads, telecom, and compute commoditized over time.</li>
                <li>Its intriguing how major players are driving costs down, echoing Jevons Paradox and making advanced tech accessible to more of us.</li>
                <li>Curious how you can build AI apps on a shoestring budget? Read my book!</li>
              </ul>
                  <Button className="mt-6 w-full">Buy Now</Button>
                  <p className="mt-2 text-xs text-center text-muted-foreground">Its always the same old story</p>
                </CardContent>
                </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to know about yt2mindmap.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 py-12">
              {[
                {
                  q: "How accurate is the AI at extracting key points?",
                  a: "Our AI has been trained on thousands of educational videos and achieves over 95% accuracy in identifying key concepts and their relationships. You can always edit and refine the mind maps if needed.",
                },
                {
                  q: "Can I use MindMapAI with any YouTube video?",
                  a: "Yes, MindMapAI works with any publicly available YouTube video where captions are enabled.",
                },
                {
                  q: "How long does it take to generate a mind map?",
                  a: "For most videos, mind maps are generated in less than 60 seconds. Longer videos may take 2-3 minutes to process.",
                },
                {
                  q: "Can I collaborate with others on my mind maps?",
                  a: "Yes, our Teams plan allows for collaborative editing and sharing of mind maps, making it perfect for study groups and classrooms.",
                },
                {
                  q: "Is there a limit to how many videos I can process?",
                  a: "Free users can process up to 3 videos a day. Pro and Teams users have unlimited access.",
                },
                
              ].map((faq, i) => (
                <Card key={i} className="border bg-background">
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform How You Learn?
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of learners who are already getting more from their content.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Link href="/login">
                  <Button size="lg" className="gap-1">
                    Turn Your Youtube History into an Asset <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                
              </div>
              <p className="text-sm text-muted-foreground pt-2">No credit card required!</p>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
