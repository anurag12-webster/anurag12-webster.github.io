import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getUpvotes(slug: string): Promise<number> {
  try {
    const { data, error } = await supabase
      .from('upvotes')
      .select('count')
      .eq('slug', slug)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error getting upvotes:', error);
      return 0;
    }

    return data?.count ?? 0;
  } catch (error) {
    console.error('Error getting upvotes:', error);
    return 0;
  }
}

export async function incrementUpvotes(slug: string): Promise<number> {
  try {
    const { error: insertError } = await supabase
      .from('upvotes')
      .insert({ slug, count: 1 })
      .select();

    if (insertError) {
      const { data, error: updateError } = await supabase.rpc('increment_upvotes', { post_slug: slug });

      if (updateError) {
        const current = await getUpvotes(slug);
        const newCount = current + 1;
        await supabase
          .from('upvotes')
          .update({ count: newCount })
          .eq('slug', slug);
        return newCount;
      }

      return data;
    }

    return 1;
  } catch (error) {
    console.error('Error incrementing upvotes:', error);
    throw error;
  }
}

export async function getViews(slug: string): Promise<number> {
  try {
    const { data, error } = await supabase
      .from('views')
      .select('count')
      .eq('slug', slug)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error getting views:', error);
      return 0;
    }

    return data?.count ?? 0;
  } catch (error) {
    console.error('Error getting views:', error);
    return 0;
  }
}

export async function incrementViews(slug: string): Promise<number> {
  try {
    const { error: insertError } = await supabase
      .from('views')
      .insert({ slug, count: 1 })
      .select();

    if (insertError) {
      const { data, error: updateError } = await supabase.rpc('increment_views', { post_slug: slug });

      if (updateError) {
        const current = await getViews(slug);
        const newCount = current + 1;
        await supabase
          .from('views')
          .update({ count: newCount })
          .eq('slug', slug);
        return newCount;
      }

      return data;
    }

    return 1;
  } catch (error) {
    console.error('Error incrementing views:', error);
    throw error;
  }
}
