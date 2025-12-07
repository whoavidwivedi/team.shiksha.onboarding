import {
  Globe,
  MessageSquare,
  Hash,
  CalendarClock,
  Rocket,
  Users,
  FolderGit2,
  GraduationCap,
  Video
} from 'lucide-react';
import { Step, Feature, Stat } from './types';

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Visit the Hub",
    description: "Start your journey at our official website. Explore our mission and projects.",
    icon: Globe,
    actionText: "Visit team.shiksha",
    actionLink: "https://team.shiksha/"
  },
  {
    id: 2,
    title: "Enter the Community",
    description: "Join our Discord server. This is where collaboration happens in real-time.",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "Locate the Gateway",
    description: "Find the #request-to-join-team-shiksha-projects channel.",
    icon: Hash,
  },
  {
    id: 4,
    title: "Sync Your Calendar",
    description: "Check pinned messages to find when 'entries open' slots are scheduled.",
    icon: CalendarClock,
  },
  {
    id: 5,
    title: "Join the Launchpad",
    description: "Attend the scheduled meeting. Be prompt and ready to introduce yourself.",
    icon: Video,
  },
  {
    id: 6,
    title: "Liftoff",
    description: "Welcome to the team. Start building and learning.",
    icon: Rocket,
  }
];

export const FEATURES: Feature[] = [
  {
    title: "OpenLogo",
    description: "An open-source library of high-quality logos for developers and designers.",
    icon: FolderGit2
  },
  {
    title: "RSVP Platform",
    description: "A comprehensive event management system for community meetups.",
    icon: CalendarClock
  },
  {
    title: "DevMentors",
    description: "Connecting junior developers with experienced mentors for code reviews.",
    icon: GraduationCap
  }
];

export const STATS: Stat[] = [
  {
    id: 1,
    label: "Members",
    value: "5000+",
    icon: Users
  },
  {
    id: 2,
    label: "Projects",
    value: "3+",
    icon: FolderGit2
  },
  {
    id: 3,
    label: "Cohorts",
    value: "10+",
    icon: Users
  },
  {
    id: 4,
    label: "Mentors",
    value: "10+",
    icon: GraduationCap
  }
];