# platzi-stack

A simple analisis about tecnologies required in Platzi Master vacancies

## Schemas

### Vacacine:

    {
      title: {
        type: String,
        required: true,
      },
      vacacine_url: {
        type: String,
        required: true,
      },
      required_technologies: {
        type: Array,
        required: true,
      },
      languages: {
        type: Array,
        required: true,
      },
      english_level: {
        type: null || String,
        required: true,
      },
      remote: {
        type: Boolean,
        required: true,
      },
      salary_range: {
        type: Array || undefined,
        required: true,
      }
    }

## Student

    {
      name: {
        type: String,
        required: true,
      },
      woking: {
        type: Boolean,
        required: true,
      },
      english_level: {
        type: String,
        required: true,
      },
      languages: {
        type: Array,
        required: true,
      },
      number_of_jobs: {
        type: Number,
        required: true,
      },
      technologies_used_in_work: {
        type: Array,
        required: false,
      },
      languages_used_in_work: {
        type: Array,
        required: false,
      }
    }
