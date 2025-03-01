import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Progress } from "../components/ui/progress";

export function SkillsPage() {
  return (
    <div className="container py-8 md:py-12 space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h1>
          <p className="max-w-[700px] text-xl text-muted-foreground">
            My expertise across various technologies and domains
          </p>
        </div>
      </section>

      {/* Development & Cloud Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Development & Cloud</h2>
        </div>
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Primary Skills</CardTitle>
              <CardDescription>Technologies I use on a daily basis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Python</span>
                  <span>Expert</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">PyTorch</span>
                  <span>Advanced</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">TypeScript</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">React</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">AWS</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Linux</span>
                  <span>Advanced</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          {/* Additional Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Skills</CardTitle>
              <CardDescription>Technologies I'm also proficient with</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">C/C++</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Terraform</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">MATLAB</span>
                  <span>Advanced</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">SIMULINK</span>
                  <span>Advanced</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Engineering Tools Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Engineering Tools</h2>
        </div>
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>CAD Software</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Fusion 360</span>
                  <span>Advanced</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">OnShape</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">CREO</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>3D & Visualization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Blender</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Lab & Instrumentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">LabView</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Domain Expertise Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Domain Expertise</h2>
        </div>
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Domains</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Computer Vision</span>
                  <span>Advanced</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">3D Physics Simulation</span>
                  <span>Advanced</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Control Systems</span>
                  <span>Expert</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Professional Domains</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Web Development</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">DevOps</span>
                  <span>Intermediate</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Docker</span>
                  <span>Advanced</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Languages Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Languages</h2>
        </div>
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Italian (Native)</span>
                  <span>C2</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">English (Proficient)</span>
                  <span>C1</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Spanish (Basic)</span>
                  <span>A2</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">German (Basic)</span>
                  <span>A2</span>
                </div>
                <Progress value={35} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter">Certifications</h2>
        </div>
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Graduate Record Examination (GRE)</CardTitle>
              <CardDescription>2019</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Overall Grade: 329/340</p>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Quantitative (87th percentile)</span>
                    <span>163/170</span>
                  </div>
                  <Progress value={95.9} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Verbal (92nd percentile)</span>
                    <span>166/170</span>
                  </div>
                  <Progress value={97.6} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>English Language Certificate IELTS</CardTitle>
              <CardDescription>2018</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Overall Band Score: 7.0 (C1)</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">IELTS Score</span>
                  <span>7.0/9.0</span>
                </div>
                <Progress value={77.8} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 