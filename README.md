# Realtime Point of Sale System

A modern, real-time point of sale (POS) system built with cutting-edge web technologies. This application provides a comprehensive solution for restaurant and retail businesses with features including order management, table management, menu administration, payment processing, and real-time updates.

## ✨ Features

- 🔐 **Authentication & Authorization** - Secure user authentication with role-based access control
- 🍽️ **Menu Management** - Complete CRUD operations for menu items and categories
- 🪑 **Table Management** - Table booking and status tracking
- 📋 **Order Management** - Real-time order processing and tracking
- 💳 **Payment Integration** - Seamless payment processing with Midtrans
- 📊 **Admin Dashboard** - Comprehensive analytics and management interface
- 🔄 **Real-time Updates** - Live data synchronization across all connected clients
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- 🌙 **Dark Mode** - Built-in theme switching capability

## 🛠️ Tech Stack

### Frontend

- **[React 19](https://react.dev/)** - Frontend Library
- **[Next.js 15](https://nextjs.org/)** - React Framework
- **[TypeScript](https://www.typescriptlang.org/)** - Programming Language
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS Framework
- **[Shadcn UI](https://ui.shadcn.com/)** - UI Library

### State Management & Data Fetching

- **[TanStack React Query](https://tanstack.com/query/latest)** - Client Data Fetching
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State Management

### Form & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Form Validation
- **[Zod](https://zod.dev/)** - Data Validation

### Backend & Infrastructure

- **[Supabase](https://supabase.com/)** - PostgreSQL Realtime Database, Storage & Authentication
- **[Midtrans](https://midtrans.com/)** - Payment Gateway
- **[Vercel](https://vercel.com/)** - Deployment Service

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm, yarn, pnpm, or bun
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ravfael/realtime-point-of-sales.git
   cd realtime-point-of-sales
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   copy env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. **Set up the database**

   Run the SQL migrations in your Supabase SQL editor:

   - `migrations/001-auth-profiles.sql`
   - `migrations/002-menu.sql`
   - `migrations/003-table.sql`
   - `migrations/004-order.sql`

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── actions/           # Server actions
├── app/              # Next.js App Router pages
│   ├── (auth)/       # Authentication pages
│   ├── (dashboard)/  # Dashboard pages
│   └── payment/      # Payment pages
├── components/       # Reusable UI components
│   └── ui/          # Shadcn UI components
├── configs/         # Configuration files
├── constants/       # Application constants
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries
│   └── supabase/    # Supabase client configurations
├── migrations/      # Database migration files
├── providers/       # React context providers
├── stores/          # Zustand stores
├── types/           # TypeScript type definitions
└── validations/     # Zod validation schemas
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 🚀 Deployment

This application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ravfael/realtime-point-of-sales)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful UI components
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Vercel](https://vercel.com/) for hosting and deployment
- All the amazing open-source libraries that made this project possible

---

Built with ❤️ using Next.js 15 and React 19
