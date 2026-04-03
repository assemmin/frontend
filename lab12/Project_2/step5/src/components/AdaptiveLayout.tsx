import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Platform,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

interface AdaptiveLayoutProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export function AdaptiveLayout({ header, content, footer }: AdaptiveLayoutProps) {
  const { colors } = useTheme();
  const { width, height } = useWindowDimensions();

  const isTablet = width >= 768;
  const isLandscape = width > height;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {header && <View style={[styles.header, { backgroundColor: colors.primary }]}>{header}</View>}

      <View style={[styles.main, isLandscape && styles.mainLandscape, isTablet && styles.mainTablet]}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            isTablet && styles.scrollContentTablet,
          ]}
        >
          {isTablet ? <TabletLayout>{content}</TabletLayout> : <PhoneLayout>{content}</PhoneLayout>}
        </ScrollView>
      </View>

      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

function PhoneLayout({ children }: { children: React.ReactNode }) {
  return <View style={styles.phoneLayout}>{children}</View>;
}

function TabletLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.tabletLayout}>
      {React.Children.map(children, (child, index) => (
        <View key={index} style={styles.tabletItem}>
          {child}
        </View>
      ))}
    </View>
  );
}

type FeatureVariant = 'primary' | 'secondary' | 'accent';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: FeatureVariant;
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = 'primary',
}: FeatureCardProps) {
  const { colors } = useTheme();

  const backgroundColor =
    variant === 'accent' ? colors.primary : variant === 'secondary' ? colors.surface : colors.card;
  const titleColor = variant === 'accent' ? '#FFFFFF' : colors.text;
  const descriptionColor = variant === 'accent' ? '#E6E8EB' : colors.textSecondary;

  return (
    <View style={[styles.featureCard, { backgroundColor }]}>
      <Text style={[styles.featureIcon, { color: variant === 'accent' ? '#fff' : colors.primary }]}>
        {icon}
      </Text>
      <Text style={[styles.featureTitle, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.featureDescription, { color: descriptionColor }]}>{description}</Text>
    </View>
  );
}

interface StatsRowProps {
  stats: Array<{ label: string; value: string }>;
}

export function StatsRow({ stats }: StatsRowProps) {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.statsRow, isTablet && styles.statsRowTablet, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statItem}>
          <Text style={[styles.statValue, isTablet && styles.statValueTablet, { color: colors.primary }]}>
            {stat.value}
          </Text>
          <Text style={[styles.statLabel, isTablet && styles.statLabelTablet, { color: colors.textSecondary }]}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

interface ResponsiveImageProps {
  source: { uri: string };
  style?: object;
}

export function ResponsiveImage({ source, style }: ResponsiveImageProps) {
  // Lab placeholder: keep the responsive scaffolding without adding networking/image dependencies.
  const { width } = useWindowDimensions();
  const aspectRatio = 16 / 9;

  return (
    <View style={[styles.imageContainer, { width }, style]}>
      <View style={[styles.imagePlaceholder, { aspectRatio }]}>
        <Text style={[styles.imagePlaceholderText]}>Image</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 44 : 12,
  },
  main: {
    flex: 1,
  },
  mainLandscape: {
    flexDirection: 'row',
  },
  mainTablet: {
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
  },
  scrollContentTablet: {
    paddingVertical: 24,
  },
  phoneLayout: {
    paddingHorizontal: 16,
  },
  tabletLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tabletItem: {
    width: '48%',
    marginBottom: 16,
  },
  footer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
  },
  featureCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statsRowTablet: {
    paddingVertical: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  statValueTablet: {
    fontSize: 32,
  },
  statLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  statLabelTablet: {
    fontSize: 14,
  },
  imageContainer: {
    marginBottom: 16,
  },
  imagePlaceholder: {
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imagePlaceholderText: {
    fontSize: 16,
    color: '#999',
  },
});

