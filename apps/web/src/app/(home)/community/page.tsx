import Link from "next/link"
import {
  MessageSquare,
  Users,
  Send,
  Search,
  User,
  Zap,
  Award,
  Star,
  Hash,
  Bell,
  Settings,
  PlusCircle,
  Pin,
  AlignLeft
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Separator } from "@workspace/ui/components/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@workspace/ui/components/tabs"
import { cn } from "@/src/lib/utils"

// Neubrutalism style constants
const NEOBRUTALISM = {
  borders: {
    normal: "border-2 border-black",
    thick: "border-4 border-black"
  },
  shadows: {
    small: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    medium: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    large: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  hover: {
    transform: "hover:-translate-x-[2px] hover:-translate-y-[2px]",
    shadow: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  }
}

// Mock data for community channels
const channels = [
  { id: 1, name: "general", unread: 7, pinned: true },
  { id: 2, name: "introductions", unread: 2, pinned: true },
  { id: 3, name: "resources", unread: 0, pinned: true },
  { id: 4, name: "blogging-tips", unread: 12, pinned: false },
  { id: 5, name: "seo-strategies", unread: 3, pinned: false },
  { id: 6, name: "content-creation", unread: 0, pinned: false },
  { id: 7, name: "tech-support", unread: 0, pinned: false },
  { id: 8, name: "off-topic", unread: 5, pinned: false }
]

// Mock data for online members
const onlineMembers = [
  { id: 1, name: "Jane Cooper", role: "Admin", avatar: null, status: "online" },
  { id: 2, name: "Alex Morgan", role: "Moderator", avatar: null, status: "online" },
  { id: 3, name: "Robert Fox", role: "Member", avatar: null, status: "online" },
  { id: 4, name: "Wade Warren", role: "Member", avatar: null, status: "online" },
  { id: 5, name: "Leslie Alexander", role: "Member", avatar: null, status: "away" },
  { id: 6, name: "Jacob Jones", role: "Member", avatar: null, status: "away" },
  { id: 7, name: "Guy Hawkins", role: "Member", avatar: null, status: "dnd" }
]

// Mock chat messages data
const chatMessages = [
  {
    id: 1,
    user: { name: "Jane Cooper", role: "Admin", avatar: null },
    message: "Welcome to the General channel! This is where we discuss all things BloggerUp.",
    timestamp: "10:15 AM",
    pinned: true
  },
  {
    id: 2,
    user: { name: "Alex Morgan", role: "Moderator", avatar: null },
    message: "Remember to check out our resources channel for helpful blogging templates and guides!",
    timestamp: "10:23 AM",
    pinned: false
  },
  {
    id: 3,
    user: { name: "Robert Fox", role: "Member", avatar: null },
    message: "Has anyone tried the new content analytics feature? It's been super helpful for tracking my post performance.",
    timestamp: "10:45 AM",
    pinned: false
  },
  {
    id: 4,
    user: { name: "Wade Warren", role: "Member", avatar: null },
    message: "I'm having trouble with the image uploader. Any tips?",
    timestamp: "11:02 AM",
    pinned: false
  },
  {
    id: 5,
    user: { name: "Leslie Alexander", role: "Member", avatar: null },
    message: "@Wade Try using WebP format, it works better and has smaller file sizes.",
    timestamp: "11:05 AM",
    pinned: false
  },
  {
    id: 6,
    user: { name: "Jane Cooper", role: "Admin", avatar: null },
    message: "We'll be hosting a live workshop on SEO best practices this Friday at 2PM PST. Make sure to register if you're interested!",
    timestamp: "11:15 AM",
    pinned: false
  },
  {
    id: 7,
    user: { name: "Guy Hawkins", role: "Member", avatar: null },
    message: "Just published my first blog post using the templates. Thanks for the resources!",
    timestamp: "11:30 AM",
    pinned: false
  }
]

// Function to generate avatar placeholder
const getAvatarUrl = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;
};

// Function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-green-500";
    case "away":
      return "bg-yellow-500";
    case "dnd":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

// Function to get role badge color
const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case "Admin":
      return "bg-pink-100";
    case "Moderator":
      return "bg-blue-100";
    default:
      return "bg-gray-100";
  }
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Breadcrumbs */}
      <div className="border-y-2 border-black bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-muted-foreground">Community</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Channels */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Community Info */}
              <div className={cn(
                "p-4",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h1 className="text-2xl font-black uppercase mb-2">BloggerUp</h1>
                <p className="text-sm font-medium mb-4">Community Chat</p>

                <div className="flex gap-2">
                  <Button className={cn(
                    "flex-1 h-9",
                    "bg-blue-400 hover:bg-blue-500",
                    NEOBRUTALISM.borders.normal,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold text-xs"
                  )}>
                    <Bell className="h-4 w-4 mr-1" />
                    Notifications
                  </Button>
                  <Button className={cn(
                    "h-9 px-2",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold"
                  )}>
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Channels List */}
              <div className={cn(
                "p-4",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-black uppercase">Channels</h2>
                  <Button className={cn(
                    "h-8 w-8 p-0",
                    "bg-green-300 hover:bg-green-400",
                    NEOBRUTALISM.borders.normal,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold"
                  )}>
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>

                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search channels"
                    className={cn(
                      "pl-9 h-10",
                      NEOBRUTALISM.borders.normal,
                      "focus:shadow-none focus:translate-y-0 focus:translate-x-0",
                      "placeholder:text-gray-400"
                    )}
                  />
                </div>

                <div className="space-y-1">
                  {/* Pinned Channels */}
                  <div className="text-xs font-bold uppercase text-gray-500 px-2 py-1">
                    Pinned
                  </div>
                  {channels
                    .filter(channel => channel.pinned)
                    .map(channel => (
                      <div
                        key={channel.id}
                        className={cn(
                          "flex items-center justify-between gap-2 px-2 py-1.5 rounded",
                          "hover:bg-gray-100 cursor-pointer",
                          channel.id === 1 && "bg-blue-100"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4" />
                          <span className="font-medium">{channel.name}</span>
                        </div>
                        {channel.unread > 0 && (
                          <div className={cn(
                            "h-5 min-w-5 px-1 rounded-full bg-pink-400 border-2 border-black",
                            "text-black text-xs font-bold flex items-center justify-center"
                          )}>
                            {channel.unread}
                          </div>
                        )}
                      </div>
                    ))
                  }

                  {/* Other Channels */}
                  <div className="text-xs font-bold uppercase text-gray-500 px-2 py-1 mt-2">
                    Channels
                  </div>
                  {channels
                    .filter(channel => !channel.pinned)
                    .map(channel => (
                      <div
                        key={channel.id}
                        className={cn(
                          "flex items-center justify-between gap-2 px-2 py-1.5 rounded",
                          "hover:bg-gray-100 cursor-pointer"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4" />
                          <span className="font-medium">{channel.name}</span>
                        </div>
                        {channel.unread > 0 && (
                          <div className={cn(
                            "h-5 min-w-5 px-1 rounded-full bg-pink-400 border-2 border-black",
                            "text-black text-xs font-bold flex items-center justify-center"
                          )}>
                            {channel.unread}
                          </div>
                        )}
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* Community Stats */}
              <div className={cn(
                "p-4",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="font-black uppercase mb-4">Community Stats</h2>

                <div className="grid grid-cols-2 gap-3">
                  <div className={cn(
                    "p-3 text-center",
                    "bg-blue-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <div className="text-2xl font-bold">2,547</div>
                    <div className="text-xs font-bold uppercase">Members</div>
                  </div>

                  <div className={cn(
                    "p-3 text-center",
                    "bg-pink-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <div className="text-2xl font-bold">128</div>
                    <div className="text-xs font-bold uppercase">Online</div>
                  </div>

                  <div className={cn(
                    "p-3 text-center",
                    "bg-green-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <div className="text-2xl font-bold">845</div>
                    <div className="text-xs font-bold uppercase">Messages Today</div>
                  </div>

                  <div className={cn(
                    "p-3 text-center",
                    "bg-yellow-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs font-bold uppercase">New Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-6">
            <div className={cn(
              "flex flex-col h-[calc(100vh-12rem)]",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              {/* Channel Header */}
              <div className={cn(
                "p-4 flex items-center justify-between",
                "bg-blue-100 border-b-2 border-black"
              )}>
                <div className="flex items-center gap-2">
                  <Hash className="h-5 w-5" />
                  <span className="font-bold">general</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button className={cn(
                    "h-8 px-2",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold text-xs"
                  )}>
                    <Pin className="h-4 w-4 mr-1" />
                    Pinned
                  </Button>
                  <Button className={cn(
                    "h-8 px-2",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold text-xs"
                  )}>
                    <Users className="h-4 w-4 mr-1" />
                    Members
                  </Button>
                  <Button className={cn(
                    "h-8 w-8 p-0",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold"
                  )}>
                    <AlignLeft className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Pinned Message */}
                {chatMessages
                  .filter(msg => msg.pinned)
                  .map(message => (
                    <div
                      key={message.id}
                      className={cn(
                        "p-3",
                        "bg-yellow-100",
                        NEOBRUTALISM.borders.normal
                      )}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-8 w-8 border-2 border-black">
                            <AvatarImage
                              src={message.user.avatar || getAvatarUrl(message.user.name)}
                              alt={message.user.name}
                            />
                            <AvatarFallback>
                              {message.user.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold">{message.user.name}</span>
                              <span className={cn(
                                "text-xs px-1.5 py-0.5 font-bold border-2 border-black",
                                getRoleBadgeColor(message.user.role)
                              )}>
                                {message.user.role}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Pin className="h-3 w-3" />
                          <span className="text-xs text-gray-500">{message.timestamp}</span>
                        </div>
                      </div>
                      <p className="pl-10">{message.message}</p>
                    </div>
                  ))
                }

                {/* Regular Messages */}
                {chatMessages
                  .filter(msg => !msg.pinned)
                  .map(message => (
                    <div key={message.id} className="flex">
                      <Avatar className="h-8 w-8 mr-2 mt-1 border-2 border-black flex-shrink-0">
                        <AvatarImage
                          src={message.user.avatar || getAvatarUrl(message.user.name)}
                          alt={message.user.name}
                        />
                        <AvatarFallback>
                          {message.user.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-bold">{message.user.name}</span>
                            <span className={cn(
                              "text-xs px-1.5 py-0.5 font-bold border-2 border-black",
                              getRoleBadgeColor(message.user.role)
                            )}>
                              {message.user.role}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{message.timestamp}</span>
                        </div>
                        <p className="mt-1">{message.message}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

              {/* Message Input */}
              <div className="p-4 border-t-2 border-black">
                <form className="flex gap-2">
                  <Textarea
                    placeholder="Type your message here..."
                    className={cn(
                      "min-h-20 resize-none",
                      NEOBRUTALISM.borders.normal,
                      "focus:shadow-none focus:translate-y-0 focus:translate-x-0",
                      "placeholder:text-gray-400"
                    )}
                  />
                  <Button className={cn(
                    "px-4",
                    "bg-green-400 hover:bg-green-500",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    "hover:shadow-none transform transition hover:-translate-y-1 hover:-translate-x-1",
                    "text-black font-bold"
                  )}>
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar - Members */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Online Members */}
              <div className={cn(
                "p-4",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="font-black uppercase mb-4">Online Members</h2>

                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search members"
                    className={cn(
                      "pl-9 h-10",
                      NEOBRUTALISM.borders.normal,
                      "focus:shadow-none focus:translate-y-0 focus:translate-x-0",
                      "placeholder:text-gray-400"
                    )}
                  />
                </div>

                <div className="space-y-2">
                  {onlineMembers.map(member => (
                    <div
                      key={member.id}
                      className={cn(
                        "flex items-center justify-between p-2",
                        "hover:bg-gray-50 rounded cursor-pointer"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Avatar className="h-8 w-8 border-2 border-black">
                            <AvatarImage
                              src={member.avatar || getAvatarUrl(member.name)}
                              alt={member.name}
                            />
                            <AvatarFallback>
                              {member.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className={cn(
                            "absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white",
                            getStatusColor(member.status)
                          )} />
                        </div>
                        <div>
                          <div className="font-bold text-sm">{member.name}</div>
                          <div className="text-xs text-gray-500">{member.role}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div className={cn(
                "p-4",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="font-black uppercase mb-4">Top Contributors</h2>

                <div className="space-y-3">
                  {onlineMembers.slice(0, 5).map((member, index) => (
                    <div
                      key={member.id}
                      className={cn(
                        "flex items-center gap-3 p-2",
                        index % 2 === 0 ? "bg-blue-100" : "bg-pink-100",
                        NEOBRUTALISM.borders.normal
                      )}
                    >
                      <div className="font-bold text-lg">{index + 1}</div>
                      <Avatar className="h-8 w-8 border-2 border-black">
                        <AvatarImage
                          src={member.avatar || getAvatarUrl(member.name)}
                          alt={member.name}
                        />
                        <AvatarFallback>
                          {member.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-bold text-sm">{member.name}</div>
                        <div className="flex items-center text-xs">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                          <span>{1250 - (index * 120)} points</span>
                        </div>
                      </div>
                      {index === 0 && (
                        <Award className="h-5 w-5 text-yellow-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className={cn(
                "p-4",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="font-black uppercase mb-4">Upcoming Events</h2>

                <div className={cn(
                  "p-3 mb-3",
                  "bg-green-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="font-bold">SEO Workshop</h3>
                  <p className="text-sm mb-2">Learn the latest SEO strategies to boost your blog traffic</p>
                  <div className="flex justify-between items-center text-xs">
                    <span>Friday, 2:00 PM PST</span>
                    <Button className={cn(
                      "h-7 px-2",
                      "bg-white",
                      "border-2 border-black",
                      "text-black text-xs font-bold"
                    )}>
                      RSVP
                    </Button>
                  </div>
                </div>

                <div className={cn(
                  "p-3",
                  "bg-yellow-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="font-bold">Community Q&A</h3>
                  <p className="text-sm mb-2">Ask questions and get advice from experienced bloggers</p>
                  <div className="flex justify-between items-center text-xs">
                    <span>Monday, 5:00 PM PST</span>
                    <Button className={cn(
                      "h-7 px-2",
                      "bg-white",
                      "border-2 border-black",
                      "text-black text-xs font-bold"
                    )}>
                      RSVP
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
