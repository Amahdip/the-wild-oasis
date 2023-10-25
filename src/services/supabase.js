import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mglpqqrgkmsakqjwtbuc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbHBxcXJna21zYWtxand0YnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMjE5NDksImV4cCI6MjAxMzY5Nzk0OX0.6Avp5R4-eMx2FLzSistE9a_eK-iELgG58QUsggT3qQo'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
