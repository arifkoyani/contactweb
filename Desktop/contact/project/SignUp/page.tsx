"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignUpForm() {
  const [date, setDate] = useState<Date>();
  const [step, setStep] = useState("personal");

  return (
    <div className=" bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 flex items-center justify-center">
      <Card className="w-full max-w-4xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Create Your Account
          </CardTitle>
          <CardDescription>
            Join our community and unlock all features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={step} onValueChange={setStep} className="w-full">
            <TabsList className="w-full grid-cols-3 mb-8 flex">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="account">Account Details</TabsTrigger>
              <TabsTrigger value="security">Security & Professional</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="middleName">Middle Name</Label>
                  <Input id="middleName" placeholder="William" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="johndoe123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input id="nationality" placeholder="Your nationality" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Your country" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Your city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal">Postal/ZIP Code</Label>
                  <Input id="postal" placeholder="12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="marital">Marital Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Profile Picture</Label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="text-sm text-gray-500">Click to upload</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>
              <Button className="w-full" onClick={() => setStep("account")}>
                Next Step
              </Button>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="altEmail">Alternate Email</Label>
                  <Input id="altEmail" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountType">Account Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="referral">Referral Code</Label>
                  <Input id="referral" placeholder="Optional" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="2fa">Two-Factor Authentication</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select 2FA method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full" onClick={() => setStep("security")}>
                Next Step
              </Button>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="securityQ1">Security Question 1</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select question" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pet">What was your first pet's name?</SelectItem>
                      <SelectItem value="school">What school did you first attend?</SelectItem>
                      <SelectItem value="city">In what city were you born?</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Your answer" className="mt-2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="securityQ2">Security Question 2</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select question" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mother">What is your mother's maiden name?</SelectItem>
                      <SelectItem value="street">What street did you grow up on?</SelectItem>
                      <SelectItem value="book">What was your first book?</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Your answer" className="mt-2" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Preferences</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <label htmlFor="newsletter" className="text-sm">
                        Subscribe to newsletter
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" />
                      <label htmlFor="privacy" className="text-sm">
                        Accept privacy policy
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Professional Information</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Job Title" />
                    <Input placeholder="Company Name" />
                    <Input placeholder="LinkedIn Profile" type="url" className="col-span-2" />
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                Complete Registration
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}