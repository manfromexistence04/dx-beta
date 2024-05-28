"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/registry/default/ui/use-toast"

// const FormSchema = z.object({
//   quize1: z.enum(["yes", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize2: z.enum(["yes", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize3: z.enum(["yes", "idk", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize4: z.enum(["yes", "idk", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize5: z.enum(["yes", "idk", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize6: z.enum(["yes", "idk", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize7: z.enum(["yes", "idk", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize8: z.enum(["yes", "idk", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize9: z.enum(["yes", "idk", "no"], {
//     required_error: "You need to select a answer.",
//   }),
//   quize10: z.enum(["yes", "idk", "no"], {
//     required_error: "You need to select a answer.",
//   }),
// })
let questions:any = [
  {
    "1": "In a social gathering, do you feel more energized by interacting with a large group of people or by\r\n having one-on-one conversations?",
    a: "a) Large group interactions (E)",
    b: "b) One-on-one conversations (I)",
  }, {
    "2": "How do you typically recharge after a busy day?",
    a: "a) Spending time with friends or engaging in social activities (E)",
    b: "b) Having some alone time to relax and unwind (I)",
  }, {
    "3": "When facing a challenge, do you prefer brainstorming ideas with others or working through it\r\n independently?",
    a: "a) Brainstorming with others (E)",
    b: "b) Working through it independently (I)",
  }, {
    "4": "In your free time, do you find yourself seeking out social events and gatherings or enjoying quieter\r\n activities at home?",
    a: "a) Social events and gatherings (E)",
    b: "b) Quieter activities at home (I)",
  }, {
    "5": "How do you feel about small talk?",
    a: "a) Enjoy it and find it easy to engage in (E)",
    b: "b) Find it somewhat awkward or draining (I)",
  }, {
    "6": "When making decisions, do you rely more on your own instincts and feelings or seek input from\r\n others?",
    a: "a) Rely on own instincts and feelings (I)",
    b: "b) Seek input from others (E)",
  }, {
    "7": "How do you handle new and unfamiliar situations?",
    a: "a) Embrace them with enthusiasm (E)",
    b: "b) Approach them with caution (I)",
  }, {
    "8": "In a work or team setting, do you prefer open office spaces and collaboration or individual\r\n workspaces?",
    a: "a) Open office spaces and collaboration (E)",
    b: "b) Individual workspaces (I)",
  }, {
    "9": "How do you typically respond to being the focal point in a group setting?",
    a: "a) Embrace it and feel at ease (E)",
    b: "b) Prefer to avoid being the center of attention (I)",
  }, {
    "10": "When planning a weekend, do you lean towards social plans with friends or quiet time for\r\n yourself?",
    a: "a) Social plans with friends (E)",
    b: "b) Quiet time for yourself (I)",
  }, {
    "11": "When meeting new people, are you more likely to initiate conversations and introductions or wait for\r\n others to approach you?",
    a: "a) Initiate conversations and introductions (E)",
    b: "b) Wait for others to approach you (I)",
  }, {
    "12": "When faced with a problem, do you prefer to rely on concrete facts and details or explore\r\n possibilities and potential meanings?",
    a: "a) Rely on concrete facts and details (S)",
    b: "b) Explore possibilities and potential meanings (N)",
  }, {
    "13": "How do you approach new information or learning?",
    a: "a) Prefer practical, hands-on experiences (S)",
    b: "b) Enjoy exploring theories and concepts (N)",
  }, {
    "14": "In a conversation, are you more focused on the present and current details or on future possibilities\r\n and patterns?",
    a: "a) Present and current details (S)",
    b: "b) Future possibilities and patterns (N)",
  }, {
    "15": "When planning a trip, do you prefer to have a detailed itinerary and clear schedule or leave room for\r\n spontaneous experiences and changes?",
    a: "a) Detailed itinerary and clear schedule (S)",
    b: "b) Leave room for spontaneous experiences and changes (N)",
  }, {
    "16": "How do you make decisions?",
    a: "a) Based on practical considerations and real-world implications (S)",
    b: "b) Consider potential outcomes and future possibilities (N)",
  }, {
    "17": "When working on a project, do you tend to focus on the specific tasks at hand or the overall vision\r\n and goals?",
    a: "a) Specific tasks at hand (S)",
    b: "b) Overall vision and goals (N)",
  }, {
    "18": "In a group discussion, do you prefer to stick to the facts and details or contribute ideas and\r\n theories?",
    a: "a) Stick to facts and details (S)",
    b: "b) Contribute ideas and theories (N)",
  }, {
    "19": "How do you handle unexpected changes or disruptions to your plans?",
    a: "a) Prefer stability and may find changes challenging (S)",
    b: "b) Adapt well to changes and enjoy the flexibility (N)",
  }, {
    "20": "When recalling a past event, do you focus more on the specific details and occurrences or the overall\r\n impressions and meanings?",
    a: "a) Specific details and occurrences (S)",
    b: "b) Overall impressions and meanings (N)",
  }, {
    "21": "When reading a book or watching a movie, do you pay close attention to the plot and events or look\r\n for deeper meanings and symbolism?",
    a: "a) Plot and events (S)",
    b: "b) Deeper meanings and symbolism (N)",
  }, {
    "22": "How do you prefer to receive information?",
    a: "a) Clear and straightforward explanations (S)",
    b: "b) Rich with possibilities and potential connections (N)",
  }, {
    "23": "When faced with a decision, do you rely more on your past experiences and proven methods or seek out\r\n innovative and creative solutions?",
    a: "a) Past experiences and proven methods (S)",
    b: "b) Innovative and creative solutions (N)",
  }, {
    "24": "In a brainstorming session, do you tend to come up with practical, actionable ideas or imaginative,\r\n out-of-the-box concepts?",
    a: "a) Practical, actionable ideas (S)",
    b: "b) Imaginative, out-of-the-box concepts (N)",
  }, {
    "25": "How do you approach problem-solving?",
    a: "a) Step-by-step and methodical approach (S)",
    b: "b) Approaching with creativity and openness (N)",
  }, {
    "26": "When making decisions, do you prioritize logical analysis and objective criteria or consider the\r\n impact on people and relationships?",
    a: "a) Logical analysis and objective criteria (T)",
    b: "b) Consider the impact on people and relationships (F)",
  }, {
    "27": "How do you handle criticism or feedback?",
    a: "a) Focus on the facts and seek constructive solutions (T)",
    b: "b) Consider the emotional aspects and how it affects relationships (F)",
  }, {
    "28": "When faced with a problem, do you rely more on your head and reason or your heart and\r\n empathy?",
    a: "a) Head and reason (T)",
    b: "b) Heart and empathy (F)",
  }, {
    "29": "How do you prioritize tasks and responsibilities?",
    a: "a) Based on logical importance and efficiency (T)",
    b: "b) Considering the values and impact on people (F)",
  }, {
    "30": "In a group decision-making process, do you tend to advocate for the most logical and rational choice\r\n or the one that aligns with personal values and harmony?",
    a: "a) Logical and rational choice (T)",
    b: "b) Aligns with personal values and harmony (F)",
  }, {
    "31": "When giving feedback, do you focus on providing objective analysis or consider the individual's\r\n feelings and emotional response?",
    a: "a) Objective analysis (T)",
    b: "b) Consider the individual's feelings and emotional response (F)",
  }, {
    "32": "How do you express your opinions in a debate or discussion?",
    a: "a) Emphasize facts, evidence, and logical reasoning (T)",
    b: "b) Consider personal values, emotions, and the impact on people (F)",
  }, {
    "33": "When solving a problem, do you prioritize efficiency and effectiveness, even if it means being blunt,\r\n or do you consider the feelings of those involved?",
    a: "a) Prioritize efficiency and effectiveness (T)",
    b: "b) Consider the feelings of those involved (F)",
  }, {
    "34": "In a work environment, do you value objective performance metrics and results or prioritize a\r\n positive and supportive team culture?",
    a: "a) Objective performance metrics and results (T)",
    b: "b) Positive and supportive team culture (F)",
  }, {
    "35": "How do you approach conflict resolution?",
    a: "a) Focus on finding logical solutions and compromises (T)",
    b: "b) Consider the emotional needs and harmony of individuals involved (F)",
  }, {
    "36": "When planning an event or project, do you prioritize the logical steps and timeline or consider the\r\n emotional atmosphere and team dynamics?",
    a: "a) Logical steps and timeline (T)",
    b: "b) Emotional atmosphere and team dynamics (F)",
  }, {
    "37": "How do you cope with stress or pressure?",
    a: "a) Analyze the situation logically and strategize a plan (T)",
    b: "b) Seek emotional support and consider the impact on relationships (F)",
  }, {
    "38": "When making decisions, what holds more weight for you?",
    a: "a) Objective data and analysis (T)",
    b: "b) Personal values and the impact on people (F)",
  }, {
    "39": "When providing feedback, do you prioritize offering constructive criticism and improvement\r\n suggestions or highlighting positive aspects and encouraging the individual?",
    a: "a) Constructive criticism and improvement suggestions (T)",
    b: "b) Highlighting positive aspects and encouraging the individual (F)",
  }, {
    "40": "How do you feel about making plans and sticking to a schedule?",
    a: "a) Enjoy making plans and prefer a structured schedule (J)",
    b: "b) Prefer flexibility and spontaneity, dislike strict schedules (P)",
  }, {
    "41": "When starting a project, do you prefer to have a detailed plan in place or do you like to explore\r\n possibilities and figure it out as you go?",
    a: "a) Prefer to have a detailed plan (J)",
    b: "b) Like to explore possibilities and figure it out as you go (P)",
  }, {
    "42": "How do you approach deadlines?",
    a: "a) Work diligently to meet deadlines well in advance (J)",
    b: "b) Tend to work better under pressure and close to the deadline (P)",
  }, {
    "43": "In a work setting, do you prefer a clear and organized workspace or are you comfortable with a more\r\n flexible and adaptable environment?",
    a: "a) Prefer a clear and organized workspace (J)",
    b: "b) Comfortable with a more flexible and adaptable environment (P)",
  }, {
    "44": "When packing for a trip, do you plan and make a checklist in advance or pack on the fly, throwing in\r\n what feels right at the moment?",
    a: "a) Plan and make a checklist in advance (J)",
    b: "b) Pack on the fly, throwing in what feels right (P)",
  }, {
    "45": "What do you do when your plans suddenly change?",
    a: "a) Dislike unexpected changes and prefer to stick to the original plan (J)",
    b: "b) Adapt well to unexpected changes and enjoy the flexibility (P)",
  }, {
    "46": "When faced with a new opportunity, do you prefer to consider the advantages and disadvantages prior\r\n to making a decision or go with the flow and see where it takes you ?",
    a: "a) Consider the advantages and disadvantages prior to deciding (J)",
    b: "b) Go with the flow and see where it takes you (P)",
  }, {
    "47": "How do you approach work tasks?",
    a: "a) Like to have a set plan and follow it step by step (J)",
    b: "b) Enjoy being flexible and adapting as the situation evolves (P)",
  }, {
    "48": "When organizing your day, do you prefer to have a to-do list with specific tasks and deadlines or\r\n keep it open-ended and see where the day takes you?",
    a: "a) To-do list with specific tasks and deadlines (J)",
    b: "b) Keep it open-ended and see where the day takes you (P)",
  }, {
    "49": "How do you feel about routine and predictability?",
    a: "a) Prefer routine and find comfort in predictability (J)",
    b: "b) Dislike routine and enjoy spontaneity (P)",
  }, {
    "50": "In a decision-making process, do you like to reach a conclusion and move on or prefer to keep options\r\n open and gather more information?",
    a: "a) Like to reach a conclusion and move on (J)",
    b: "b) Prefer to keep options open and gather more information (P)",
  }
]


let FormSchema = z.object({});

for (let i = 1; i <= 50; i++) {
  FormSchema = FormSchema.extend({
    [`quiz${i}`]: z.enum(["yes", "no"], {
      required_error: "You need to select an answer.",
    }),
  });
}

console.log(FormSchema);

export default function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex items-center justify-center flex-col space-y-5 z-50 p-10">
        <div className="admin-panel-lists w-[50%] mx-auto">
          <FormField
            control={form.control}
            name="quize1"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize2"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize3"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize4"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize5"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize6"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize7"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize8"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize9"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quize10"
            render={({ field }) => (
              <FormItem className="w-full relative hover:bg-primary-foreground min-h-[150px] h-full flex flex-col space-y-3 p-5 rounded-md border">
                <div className="text-[1rem] font-bold flex flex-row items-center justify-start space-x-1.5 !p-0">
                  <span className="center bg-primary-foreground rounded-full h-[30px] w-[30px] border">1</span>
                    <span className="center text-center">What would you like to choose as you career?</span>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 px-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="idk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        I donot know
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>



        <Button type="submit" className="w-[50%] mx-auto">Submit</Button>
      </form>
    </Form>
  )
}
