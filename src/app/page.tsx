'use client'
import { Brain, PlayCircle, Zap, BookOpen, Network, Edit3, Save, RefreshCw, Star, Users, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Transform YouTube Videos into <span className="text-purple-600">Interactive Mind Maps</span>
          </h1>
          <p className="text-lg text-slate-700">
            Stop passive watching. Start active learning. Our AI-powered platform converts YouTube videos into beautiful mind maps, helping you retain knowledge and master concepts faster than ever.
          </p>
          <div className="flex gap-4 pt-4">
            <Button onClick={()=>{router.push('/mindmap')}} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6">Create Your First Mind Map</Button>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-slate-600">1,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-slate-600">4.8/5 Average Rating</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white rounded-xl shadow-xl p-6 relative z-10 overflow-hidden">
            <video
              className="w-full rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute top-8 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-30"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Limitations of <span className="text-purple-400">Passive Watching</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10 text-purple-400" />,
                title: "Time Wasted",
                text: "Spend hours watching videos only to forget most of the content within days",
              },
              {
                icon: <Brain className="h-10 w-10 text-purple-400" />,
                title: "Information Overload",
                text: "Struggle to identify and retain the most important concepts from lengthy videos",
              },
              {
                icon: <Network className="h-10 w-10 text-purple-400" />,
                title: "Disconnected Learning",
                text: "Miss valuable connections between concepts due to linear video format",
              },
            ].map((item, i) => (
              <Card key={i} className="bg-slate-800 border-none transform hover:-translate-y-1 transition-all duration-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-slate-700 p-4 rounded-full">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-purple-400">{item.title}</h3>
                    <p className="text-slate-300">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Transform Your Learning with <span className="text-purple-600">Mind Mapping</span>
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
            Don&#39;t just watch - engage with knowledge and turn insights into mastery. Our AI-powered platform helps you learn smarter, not harder.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-purple-600" />,
                    title: "Extract key insights instantly",
                    desc: "Quickly identify and save the most important concepts for faster review within the first 2 minutes of video-playback",
                  },
                  {
                    icon: <Network className="h-6 w-6 text-purple-600" />,
                    title: "Visualize connections",
                    desc: "See how ideas relate to each other for deeper understanding",
                  },
                  {
                    icon: <Edit3 className="h-6 w-6 text-purple-600" />,
                    title: "Edit and refine while watching",
                    desc: "Customize AI-generated maps to match your understanding",
                  },
                  {
                    icon: <RefreshCw className="h-6 w-6 text-purple-600" />,
                    title: "Structured reflection",
                    desc: "Reinforce learning through active engagement with content, iterate and build better maps",
                  },
                  {
                    icon: <Save className="h-6 w-6 text-purple-600" />,
                    title: "Save and revisit effortlessly",
                    desc: "Access your insights anytime without rewatching entire videos",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-purple-100 p-2 rounded-lg h-fit">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-purple-50 rounded-xl p-8 relative z-10">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-2 text-sm text-slate-500">YouTube Video</div>
                  </div>
                  <div className="h-40 bg-slate-200 rounded flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-slate-400" />
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600 animate-bounce"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="mt-6 bg-white rounded-lg shadow-md p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">Mind Map</div>
                    <div className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded-full">AI Generated</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <span className="text-purple-600 font-medium text-sm">Main Idea</span>
                      </div>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="absolute bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center"
                          style={{
                            top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 5)}%`,
                            left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 5)}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <span className="text-blue-600 font-medium text-xs">Point {i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -right-4 w-24 h-24 bg-purple-300 rounded-full opacity-30"></div>
              <div className="absolute bottom-10 -left-4 w-16 h-16 bg-yellow-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Users Say</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
            Join thousands of learners who have transformed their learning experience with our mind mapping tool.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "PhD Student",
                image: "/testimonials/sarah.svg",
                quote: "This tool has revolutionized how I process academic lectures. I can now quickly create structured notes that actually make sense.",
                highlight: "80% faster note-taking"
              },
              {
                name: "Mark Thompson",
                role: "Content Creator",
                image: "/testimonials/mark.svg",
                quote: "As someone who consumes a lot of educational content, this tool helps me retain information much better than traditional note-taking.",
                highlight: "2x better retention"
              },
              {
                name: "Lisa Rodriguez",
                role: "Learning Designer",
                image: "/testimonials/lisa.svg",
                quote: "The AI-generated mind maps provide an excellent starting point, and the ability to customize them makes learning truly interactive.",
                highlight: "Enhanced understanding"
              }
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">{item.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">&quot;{item.quote}&quot;</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-green-700">{item.highlight}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 py-4 px-6 bg-white rounded-full shadow-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-medium">1,000+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Powerful Features for Active Learning</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
            Our comprehensive suite of features helps you extract maximum value from educational content.
          </p>

          <div className="space-y-20">
            {/* AI Processing */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">AI-Powered Content Processing</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-purple-100 p-2 rounded-lg">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Smart Summarization</h4>
                      <p className="text-slate-600">Automatically extracts key concepts and relationships from videos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-purple-100 p-2 rounded-lg">
                      <Network className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Concept Mapping</h4>
                      <p className="text-slate-600">Creates visual connections between related ideas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <Image src='/mindmap.png' alt="Mind map visualization example" width={800} height={600} quality={100} priority className="w-full h-auto object-contain rounded-lg shadow-lg"/>
              </div>
            </div>

            {/* Interactive Editing */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
              <Image src='/editor.png' alt="Interactive mind map editor interface" width={800} height={600} quality={100} priority className="w-full h-auto object-contain rounded-lg shadow-lg"/>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Interactive Mind Map Editor</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-purple-100 p-2 rounded-lg">
                      <Edit3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Real-time Editing</h4>
                      <p className="text-slate-600">Customize and refine your mind maps as you watch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-purple-100 p-2 rounded-lg">
                      <Save className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Auto-save & Export</h4>
                      <p className="text-slate-600">Never lose your work with automatic saving and easy exports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Built This</h2>
            <div className="mb-8">
              <div className="w-24 h-24 rounded-full bg-purple-100 mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-12 h-12 text-purple-600" />
              </div>
              <p className="text-lg text-slate-600 mb-6">
                As lifelong learners and educators, we noticed a growing challenge: the overwhelming amount of video content
                available for learning, but the lack of tools to process and retain that knowledge effectively.
              </p>
              <p className="text-lg text-slate-600">
                We created this platform to bridge that gap, combining the power of AI with proven learning techniques like
                mind mapping. Our mission is to help learners worldwide transform passive video consumption into active,
                meaningful learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
            Choose the plan that best fits your learning journey
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-purple-200 transition-all duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <div className="text-3xl font-bold mb-6">$0<span className="text-slate-400 text-lg font-normal">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>5 mind maps per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Basic AI processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Export as PNG</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 relative hover:border-purple-300 transition-all duration-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-6">$9.99<span className="text-slate-400 text-lg font-normal">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Unlimited mind maps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Advanced AI processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Export in multiple formats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-all duration-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Team</h3>
                <div className="text-3xl font-bold mb-6">$29.99<span className="text-slate-400 text-lg font-normal">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>5 team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "How does the AI mind mapping work?",
                a: "Our AI analyzes the video content, extracts key concepts and relationships, and automatically generates a mind map structure. You can then customize and refine this map to match your understanding."
              },
              {
                q: "Can I use this with any YouTube video?",
                a: "Yes! Our tool works with any public YouTube video. Simply paste the URL and let our AI do the rest."
              },
              {
                q: "How accurate is the AI-generated mind map?",
                a: "The AI typically captures 90% of key concepts. You can always edit and refine the map to ensure it perfectly matches your needs."
              },
              {
                q: "Can I export my mind maps?",
                a: "Yes, you can export your mind maps in multiple formats including PNG, PDF, and interactive HTML."
              },
              {
                q: "Do you offer a free trial?",
                a: "Yes! Start with our free plan to create up to 5 mind maps per month. No credit card required."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Learning Smarter Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-purple-100">
            Join thousands of learners who have transformed their video learning experience with AI-powered mind mapping.
          </p>
          <Button onClick={()=>{router.push('/mindmap')}} className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg">
            Create Your First Mind Map
          </Button>
        </div>
      </section>
    </div>
  )
}

