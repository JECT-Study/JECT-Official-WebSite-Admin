import { useState } from 'react';
import {
  BlockButton,
  ContentBadge,
  NumericBadge,
  DotBadge,
  Icon,
  IconButton,
  Checkbox,
  Divider,
  Title,
  Label,
  LabelButton,
  Input,
  Callout,
  ToastProvider,
  SnackbarProvider,
} from '@jects/jds';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <ToastProvider>
      <SnackbarProvider>
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
          <Title size="lg" textAlign="left">
            JDS Component Test
          </Title>

          <Divider style={{ margin: '24px 0' }} />

          {/* Buttons */}
          <section style={{ marginBottom: '32px' }}>
            <Label as="h2" size="lg" weight="bold">
              Buttons
            </Label>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '16px',
                flexWrap: 'wrap',
              }}
            >
              <BlockButton.Basic hierarchy="accent" size="lg">
                Accent
              </BlockButton.Basic>
              <BlockButton.Basic hierarchy="primary" size="md">
                Primary
              </BlockButton.Basic>
              <BlockButton.Basic hierarchy="secondary" size="md">
                Secondary
              </BlockButton.Basic>
              <BlockButton.Basic hierarchy="tertiary" size="sm">
                Tertiary
              </BlockButton.Basic>
              <BlockButton.Feedback intent="positive" size="md">
                Positive
              </BlockButton.Feedback>
              <BlockButton.Feedback intent="destructive" size="md">
                Destructive
              </BlockButton.Feedback>
            </div>
          </section>

          <Divider style={{ margin: '24px 0' }} />

          {/* Icon Buttons */}
          <section style={{ marginBottom: '32px' }}>
            <Label as="h2" size="lg" weight="bold">
              Icon Buttons
            </Label>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '16px',
                alignItems: 'center',
              }}
            >
              <IconButton.Basic icon="search-line" size="lg" />
              <IconButton.Basic
                icon="pencil-line"
                size="md"
                hierarchy="primary"
              />
              <IconButton.Basic
                icon="delete-bin-line"
                size="md"
                hierarchy="secondary"
              />
              <IconButton.Feedback
                icon="check-line"
                size="md"
                intent="positive"
              />
              <IconButton.Feedback
                icon="close-line"
                size="md"
                intent="destructive"
              />
            </div>
          </section>

          <Divider style={{ margin: '24px 0' }} />

          {/* Label Buttons */}
          <section style={{ marginBottom: '32px' }}>
            <Label as="h2" size="lg" weight="bold">
              Label Buttons
            </Label>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '16px',
                flexWrap: 'wrap',
              }}
            >
              <LabelButton.Basic hierarchy="accent" size="md">
                Accent Label
              </LabelButton.Basic>
              <LabelButton.Basic hierarchy="primary" size="md">
                Primary Label
              </LabelButton.Basic>
              <LabelButton.Feedback intent="destructive" size="md">
                Destructive Label
              </LabelButton.Feedback>
            </div>
          </section>

          <Divider style={{ margin: '24px 0' }} />

          {/* Icons */}
          <section style={{ marginBottom: '32px' }}>
            <Label as="h2" size="lg" weight="bold">
              Icons
            </Label>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                marginTop: '16px',
                alignItems: 'center',
              }}
            >
              <Icon name="home-2-line" size="2xl" />
              <Icon name="search-line" size="xl" />
              <Icon name="github-fill" size="lg" />
              <Icon name="heart-3-fill" size="md" />
              <Icon name="notification-line" size="md" />
              <Icon name="calendar-line" size="md" />
              <Icon name="mail-line" size="md" />
            </div>
          </section>

          <Divider style={{ margin: '24px 0' }} />

          {/* Badges */}
          <section style={{ marginBottom: '32px' }}>
            <Label as="h2" size="lg" weight="bold">
              Badges
            </Label>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '16px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <ContentBadge.Basic hierarchy="accent" size="md">
                Accent
              </ContentBadge.Basic>
              <ContentBadge.Basic hierarchy="primary" size="md">
                Primary
              </ContentBadge.Basic>
              <ContentBadge.Basic
                hierarchy="secondary"
                size="sm"
                badgeStyle="outlined"
              >
                Outlined
              </ContentBadge.Basic>
              <ContentBadge.Feedback variant="positive" size="md">
                Positive
              </ContentBadge.Feedback>
              <ContentBadge.Feedback variant="destructive" size="md">
                Destructive
              </ContentBadge.Feedback>
              <NumericBadge.Basic hierarchy="accent" size="md">
                5
              </NumericBadge.Basic>
              <NumericBadge.Feedback variant="destructive" size="sm">
                99+
              </NumericBadge.Feedback>
              <DotBadge.Feedback variant="positive" size="md" />
              <DotBadge.Feedback variant="destructive" size="md" />
            </div>
          </section>

          <Divider style={{ margin: '24px 0' }} />

          {/* Input */}
          <section style={{ marginBottom: '32px' }}>
            <Label as="h2" size="lg" weight="bold">
              Input
            </Label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: '16px',
                maxWidth: '400px',
              }}
            >
              <Input.TextField
                label="Text Field"
                placeholder="Enter text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="This is a helper text"
              />
            </div>
          </section>

          <Divider style={{ margin: '24px 0' }} />

          {/* Checkbox */}
          <section style={{ marginBottom: '32px' }}>
            <Label as="h2" size="lg" weight="bold">
              Checkbox
            </Label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginTop: '16px',
              }}
            >
              <Checkbox.Content
                label="Agree to terms"
                subLabel="Please read before checking"
                checked={checked}
                onCheckedChange={(val) => setChecked(val === true)}
                size="md"
              />
              <Checkbox.Basic checked={true} size="md" />
              <Checkbox.Basic checked="indeterminate" size="md" />
            </div>
          </section>

          <Divider style={{ margin: '24px 0' }} />

          {/* Callout */}
          <section style={{ marginBottom: '32px' }}>
            <Label as="h2" size="lg" weight="bold">
              Callout
            </Label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: '16px',
              }}
            >
              <Callout.Basic hierarchy="accent" size="md" title="Info">
                This is an accent callout message.
              </Callout.Basic>
              <Callout.Feedback feedback="positive" size="md" title="Success">
                Operation completed successfully.
              </Callout.Feedback>
              <Callout.Feedback feedback="destructive" size="md" title="Error">
                Something went wrong.
              </Callout.Feedback>
            </div>
          </section>
        </div>
      </SnackbarProvider>
    </ToastProvider>
  );
}

export default App;
