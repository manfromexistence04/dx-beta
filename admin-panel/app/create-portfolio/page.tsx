"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useRef } from 'react';


import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
// import PlateEditor from "@/components/plate-editor"
import { Shell } from "@/components/shell"
import { VariantTabs } from "../_components/variant-tabs"
import { DialogUploaderDemo } from "../_components/dialog-uploader-demo"
import CountryDropdown from "@/components/dropdown/countries";
import StateDropdown from "@/components/dropdown/states";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/registry/default//ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastAction } from "@/registry/default//ui/toast"
import { useToast } from "@/registry/default/ui/use-toast"
import { Tag, TagInput } from 'emblor';
import { cn } from '@udecode/cn';
import { CommentsProvider } from '@udecode/plate-comments';
import { Plate } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { commentsUsers, myUserId } from '@/lib/plate/comments';
import { MENTIONABLES } from '@/lib/plate/mentionables';
import { plugins } from '@/lib/plate/plate-plugins';
import { CommentsPopover } from '@/components/plate-ui/comments-popover';
import { CursorOverlay } from '@/components/plate-ui/cursor-overlay';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { MentionCombobox } from '@/components/plate-ui/mention-combobox';

function PlateEditor() {
    const containerRef = useRef(null);

    const initialValue = [
        {
            id: '1',
            type: ELEMENT_PARAGRAPH,
            children: [{ text: 'Hello, World!' }],
        },
    ];

    return (
        <DndProvider backend={HTML5Backend}>
            <CommentsProvider users={commentsUsers} myUserId={myUserId}>
                <Plate plugins={plugins} initialValue={initialValue}>
                    <div
                        ref={containerRef}
                        className={cn(
                            'relative',
                            '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4'
                        )}
                    >
                        <FixedToolbar>
                            <FixedToolbarButtons />
                        </FixedToolbar>

                        <Editor
                            className="p-3 px-7 !min-h-[500px]"
                            autoFocus
                            focusRing={false}
                            variant="ghost"
                            size="md"
                        />

                        <MentionCombobox items={MENTIONABLES} />

                        <CommentsPopover />

                        <CursorOverlay containerRef={containerRef} />
                    </div>
                </Plate>
            </CommentsProvider>
        </DndProvider>
    );
}

const FormSchema = z.object({
    topics: z.array(
        z.object({
            id: z.string(),
            text: z.string(),
        }),
    ),
});

function Tags() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const [tags, setTags] = React.useState<Tag[]>([]);

    const { setValue } = form;
    const { toast } = useToast();

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    return (
        <section className="z-10 w-full flex flex-col items-center text-center gap-5">
            <div id="try" className="w-full py-8">
                <div className="w-full relative my-4 flex flex-col space-y-2">
                    <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-start">
                                <FormField
                                    control={form.control}
                                    name="topics"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col items-start">
                                            <FormLabel className="text-left">Topics</FormLabel>
                                            <FormControl className="w-full">
                                                <TagInput
                                                    {...field}
                                                    placeholder="Enter a topic"
                                                    tags={tags}
                                                    className="sm:min-w-[450px]"
                                                    setTags={(newTags) => {
                                                        setTags(newTags);
                                                        setValue('topics', newTags as [Tag, ...Tag[]]);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormDescription className="text-left">
                                                These are the topics that you&apos;re interested in.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default function CreateUniversity() {


    const containerRef = useRef(null);

    const initialValue = [
        {
            id: '1',
            type: ELEMENT_PARAGRAPH,
            children: [{ text: 'Hello, World!' }],
        },
    ];
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const [tags, setTags] = React.useState<Tag[]>([]);

    const { setValue } = form;
    const { toast } = useToast();

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    return (
        <>
            <div className="create-university min-h-[100vh] w-full lg:max-w-[1500px] lg:flex lg:flex-col lg:space-y-3 mx-auto p-10 mt-5">
                <div className="name-logo-description-university w-full grid gap-3 ">
                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                        <h1 className="text-4xl font-bold w-full text-left">Name</h1>
                        <Input type="text" placeholder="Enter University Name" />
                    </div>
                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-5 items-center justify-center p-10">
                        <h1 className="text-4xl font-bold w-full text-left">Logo</h1>
                        <div className="flex w-full items-start justify-start">
                            <DialogUploaderDemo />

                        </div>
                    </div>
                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                        <h1 className="text-4xl font-bold w-full text-left">Description</h1>
                        <Textarea placeholder="Type your description here." />
                    </div>
                </div>
                <div className="tag-location-university w-full grid gap-3 h-auto">
                    {/* <h1 className="hover-glow-border center w-full h-[250px] border rounded-md">

                    </h1> */}
                    <div className="hover-glow-border flex flex-col items-start justify-center gap-3 w-full h-full rounded-md border p-10">
                        <div className="flex flex-col lg:flex-row items-center justify-start gap-3 w-full">
                            <section className="z-10 w-full flex flex-col items-start text-start gap-5">
                                <div id="try" className="w-full">
                                    <div className="w-full relative flex flex-col space-y-2">
                                        <div className="preview flex max-h-auto w-full justify-start items-start ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md">
                                            <Form {...form}>
                                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-start">
                                                    <FormField
                                                        control={form.control}
                                                        name="topics"
                                                        render={({ field }) => (
                                                            <FormItem className="flex flex-col items-start">
                                                                {/* <FormLabel className="text-left">Topics</FormLabel> */}
                                                                <h1 className="text-4xl font-bold w-full text-left">Tag</h1>

                                                                <FormControl className="w-full">
                                                                    <TagInput
                                                                        {...field}
                                                                        placeholder="Enter a topic"
                                                                        tags={tags}
                                                                        className="sm:min-w-[450px]"
                                                                        setTags={(newTags) => {
                                                                            setTags(newTags);
                                                                            setValue('topics', newTags as [Tag, ...Tag[]]);
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormDescription className="text-left">
                                                                    These are the topics that you&apos;re interested in.
                                                                </FormDescription>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <Button type="submit">Submit</Button>
                                                </form>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <StateDropdown /> */}
                        </div>

                    </div>
                    <div className="hover-glow-border flex flex-col items-start justify-center gap-3 w-full h-full border rounded-md p-10">
                        <h1 className="text-4xl font-bold w-full text-left">Location</h1>
                        <div className="flex flex-col lg:flex-row items-center justify-start gap-3 w-full">
                            <CountryDropdown />
                            <StateDropdown />
                        </div>

                    </div>
                </div>

                <div className="hover-glow-border w-full border rounded-md mx-auto h-auto pt-3 flex flex-col space-y-3">
                    <h1 className="text-4xl font-bold w-full text-left pl-4">Overview</h1>
                    <div className="w-full h-full border-t">
                        <DndProvider backend={HTML5Backend}>
                            <CommentsProvider users={commentsUsers} myUserId={myUserId}>
                                <Plate plugins={plugins} initialValue={initialValue}>
                                    <div
                                        ref={containerRef}
                                        className={cn(
                                            'relative',
                                            '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4'
                                        )}
                                    >
                                        <FixedToolbar>
                                            <FixedToolbarButtons />
                                        </FixedToolbar>

                                        <Editor
                                            className="p-3 px-7 !min-h-[500px]"
                                            autoFocus
                                            focusRing={false}
                                            variant="ghost"
                                            size="md"
                                        />

                                        <MentionCombobox items={MENTIONABLES} />

                                        <CommentsPopover />

                                        <CursorOverlay containerRef={containerRef} />
                                    </div>
                                </Plate>
                            </CommentsProvider>
                        </DndProvider>
                    </div>
                </div>

                <div className="w-full border rounded-md mx-auto h-auto min-h-[300px]">
                    <Shell>
                        <VariantTabs />
                    </Shell>
                </div>
            </div>
        </>
    )
}


